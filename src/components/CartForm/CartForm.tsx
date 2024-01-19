import React, {ChangeEvent, FC, ReactNode, useEffect, useState} from 'react';
import {useTranslation} from "react-i18next";
import * as Yup from "yup";
import {FormikHelpers, useFormik} from "formik";
import {Form as BootstrapForm} from "react-bootstrap";
import s from "./CartForm.module.scss";
import CustomPhoneInput from "../CustomPhoneInput";

import Link from 'next/link';
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {sendProductsToTelegram} from "@/tools/sendProductsToTelegram";
import {closeCartModal, openOrderedModal, removeAllCartProducts} from "@/lib/store/features/cart/cartSlice";




interface CustomTextareaProps {
    type?: string;
    name?: string;
    className?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e:  React.FocusEvent<HTMLInputElement>) => void;
    style?:{
        minHeight: string;
    },
    value: string;
    placeholder: string;
    field?: {
        name: string;
        value: string;
        onChange: (e: React.ChangeEvent<any>) => void;
        onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    };
    form?: {
        setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
    };
    // props: {
    //     type: string;
    //     name: string;
    //     className: string;
    //     onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    //     onBlur: (e:  React.FocusEvent<HTMLInputElement>) => void;
    //     value: string;
    // };
    children?: ReactNode;
}


const CustomTextarea: FC<CustomTextareaProps> = ({field, form, ...props}) => (
    <>
        <BootstrapForm.Control as="textarea" rows={3} {...field} {...props} />
    </>
);


type TypeValue = {
    name: string;
    phone: string;
    email: string;
    // city: string;
    address: string;
    number: string;
    flat: string;
    postCity: string;
    postNumber: string;
    gettingType: string;
    comment: string;
}


const CartForm = () => {
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const total = useAppSelector(state => state.cart.total);
    const [isChecked, setIsChecked] = useState(false);
    const [totalSum, setTotalSum] = useState(total);
    const items = useAppSelector(state => state.cart.cartItems);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required(t("fieldRequired")),
        email: Yup.string().required(t("fieldRequired")),
        phone: Yup.string().required(t("fieldRequired"))
            .test('isValidPhone', t("validationPhone"), (value) => {
                const phoneNumber = value.replace(/\D/g, '');
                return phoneNumber.length === 12;
            }),
        gettingType: Yup.string().required(t("fieldRequired")),
        // city: Yup.string().when('gettingType', {
        //     is: 'courier',
        //     then: (schema) => schema.required((t("fieldRequired"))),
        // }),
        address: Yup.string().when('gettingType', {
            is: 'courier',
            then: (schema) => schema.required(t("fieldRequired")),
        }),
        number: Yup.string().when('gettingType', {
            is: 'courier',
            then: (schema) => schema.required(t("fieldRequired")),
        }),
        flat: Yup.string().when('gettingType', {
            is: 'courier',
            then: (schema) => schema.required(t("fieldRequired")),
        }),
        postCity: Yup.string().when('gettingType', {
            is: 'post',
            then: (validationSchema) => validationSchema.required(t("fieldRequired")),
        }),
        postNumber: Yup.string().when('gettingType', {
            is: 'post',
            then: (validationSchema) => validationSchema.required(t("fieldRequired")),
        }),

    });

    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            email: '',
            comment: '',
            // city: '',
            address: '',
            number: '',
            flat: '',
            postCity: '',
            postNumber: '',
            gettingType: 'pickup'
        },
        validationSchema: validationSchema,
        onSubmit: (values: TypeValue, {setSubmitting, resetForm}: FormikHelpers<TypeValue>) => {
            setSubmitting(false);
            console.log(values);
            const cartItems = [...items].map((item) => {
                let sizeNew = "";

                if (item.size === "3" || item.size === "5" || item.size === "7" || item.size === "9"
                    || item.size === "100" || item.size === "110" || item.size === "116"
                    || item.size === "124" || item.size === "132" || item.size === "140"
                    || item.size === "148" || item.size === "154" || item.size === "162"
                    || item.size === "170" || item.size === "178" || item.size === "184"
                    || item.size === "194"
                ) {
                    sizeNew = t(`size${item.size}`)
                } else {
                    sizeNew = item.size;
                }
                return ({...item, size: sizeNew})
            })
            sendProductsToTelegram({cartItems, values, total, totalSum});
            dispatch(removeAllCartProducts());
            resetForm();
            dispatch(closeCartModal());
            dispatch(openOrderedModal());
        },
    });

    useEffect(() => {
        if (formik.values.gettingType === "pickup") {
            setTotalSum(total)
        } else if (formik.values.gettingType === "courier") {
            const sum = Number(total) + 100;
            setTotalSum(sum)
        } else {
            const sum = Number(total) + 70;
            setTotalSum(sum)
        }
    }, [dispatch, total, formik.values.gettingType]);

    return (
        <div>
            <BootstrapForm onSubmit={formik.handleSubmit}>
                <BootstrapForm.Group className="mb-3" controlId="formBasicName">
                    <BootstrapForm.Label className={s.formLabel}>{t("formName")}</BootstrapForm.Label>
                    <BootstrapForm.Control type="text" name="name" className={s.field}
                                           onChange={formik.handleChange} onBlur={formik.handleBlur}
                                           value={formik.values.name}/>
                    {formik.touched.name && formik.errors.name ? (
                        <BootstrapForm.Text className="text-danger">{formik.errors.name}</BootstrapForm.Text>
                    ) : null}
                </BootstrapForm.Group>

                <BootstrapForm.Group className="mb-3" controlId="formBasicPhone">
                    <BootstrapForm.Label className={s.formLabel}>{t("formTrialPhone")}</BootstrapForm.Label>
                    <CustomPhoneInput type="tel" name="phone" className={s.field}
                                      onChange={formik.handleChange} onBlur={formik.handleBlur}
                                      value={formik.values.phone}/>
                    {formik.touched.phone && formik.errors.phone ? (
                        <BootstrapForm.Text className="text-danger">{formik.errors.phone}</BootstrapForm.Text>
                    ) : null}
                </BootstrapForm.Group>


                <BootstrapForm.Group className="mb-3" controlId="formBasicEmail">
                    <BootstrapForm.Label className={s.formLabel}>{t("your")} e-mail</BootstrapForm.Label>
                    <BootstrapForm.Control type="text" name="email" className={s.field}
                                           onChange={formik.handleChange} onBlur={formik.handleBlur}
                                           value={formik.values.email}/>
                    {formik.touched.email && formik.errors.email ? (
                        <BootstrapForm.Text className="text-danger">{formik.errors.email}</BootstrapForm.Text>
                    ) : null}
                </BootstrapForm.Group>

                <BootstrapForm.Group className="mb-3" controlId="formBasicComment">
                    <BootstrapForm.Label className={s.formLabel}>{t("formComment")}</BootstrapForm.Label>
                    <CustomTextarea type="text" name="comment"
                                    placeholder={t("formComment")}
                                    style={{minHeight: "130px"}}
                                    className={s.field}
                                    onChange={formik.handleChange} onBlur={formik.handleBlur}
                                    value={formik.values.comment}
                    />
                </BootstrapForm.Group>


                <div className={s.deliveryBlock}>
                    <h5 className={s.deliveryTitle}>{t("delivery")}</h5>
                    <label>
                        <input
                            type="radio"
                            id="gettingType"
                            name="gettingType"
                            value="pickup"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            checked={formik.values.gettingType === 'pickup'}
                            className={s.radio}
                        />
                        <span className={s.box}></span>
                        <span className={s.deliveryLabel}>
                                           {t("freeDelivery")}
                                    </span>
                    </label>

                    <label>
                        <input
                            type="radio"
                            id="gettingType"
                            name="gettingType"
                            value="post"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            checked={formik.values.gettingType === 'post'}
                            className={s.radio}
                        />
                        <span className={s.box}></span>
                        <span className={s.deliveryLabel}>
                                          {t("novaPost")} (70 {t("uah")})
                                    </span>
                    </label>

                    <label className={s.label}>
                        <input
                            type="radio"
                            id="gettingType"
                            name="gettingType"
                            value="courier"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            checked={formik.values.gettingType === 'courier'}
                            className={s.radio}
                        />
                        <span className={s.box}></span>
                        <span className={s.deliveryLabel}>
                                         {t("courier")} (100 {t("uah")})
                                    </span>
                    </label>
                </div>

                {formik.values.gettingType === "courier" && (
                    <>
                        {/*<BootstrapForm.Group className="mb-3" controlId="formBasicCity">*/}
                        {/*    <BootstrapForm.Label className={s.formLabel}>{t("cityLabel")}</BootstrapForm.Label>*/}
                        {/*    <BootstrapForm.Control type="text" name="city" className={s.field}*/}
                        {/*                           onChange={formik.handleChange} onBlur={formik.handleBlur}*/}
                        {/*                           value={formik.values.city}/>*/}
                        {/*    {formik.touched.city && formik.errors.city ? (*/}
                        {/*        <BootstrapForm.Text className="text-danger">{formik.errors.city}</BootstrapForm.Text>*/}
                        {/*    ) : null}*/}
                        {/*    */}
                        {/*</BootstrapForm.Group>*/}

                        <BootstrapForm.Group className="mb-3" controlId="formBasicAddress">
                            <BootstrapForm.Label className={s.formLabel}>{t("address")}</BootstrapForm.Label>
                            <BootstrapForm.Control type="text" name="address" className={s.field}
                                                   onChange={formik.handleChange} onBlur={formik.handleBlur}
                                                   value={formik.values.address}/>
                            {formik.touched.address && formik.errors.address ? (
                                <BootstrapForm.Text className="text-danger">{formik.errors.address}</BootstrapForm.Text>
                            ) : null}
                        </BootstrapForm.Group>
                        <BootstrapForm.Group className="mb-3" controlId="formBasicNumber">
                            <BootstrapForm.Label
                                className={s.formLabel}>{t("buildingNumber")}</BootstrapForm.Label>
                            <BootstrapForm.Control type="text" name="number" className={s.field}
                                                   onChange={formik.handleChange} onBlur={formik.handleBlur}
                                                   value={formik.values.number}/>
                            {formik.touched.number && formik.errors.number ? (
                                <BootstrapForm.Text className="text-danger">{formik.errors.number}</BootstrapForm.Text>
                            ) : null}
                        </BootstrapForm.Group>
                        <BootstrapForm.Group className="mb-3" controlId="formBasicFlat">
                            <BootstrapForm.Label className={s.formLabel}>{t("flat")}</BootstrapForm.Label>
                            <BootstrapForm.Control type="text" name="flat" className={s.field}
                                                   onChange={formik.handleChange} onBlur={formik.handleBlur}
                                                   value={formik.values.flat}/>
                            {formik.touched.flat && formik.errors.flat ? (
                                <BootstrapForm.Text className="text-danger">{formik.errors.flat}</BootstrapForm.Text>
                            ) : null}
                        </BootstrapForm.Group>
                    </>)}

                {formik.values.gettingType === 'post' && (
                    <>
                        <BootstrapForm.Group className="mb-3" controlId="formBasicPostCity">
                            <BootstrapForm.Label className={s.formLabel}>{t("cityLabel")}</BootstrapForm.Label>
                            <BootstrapForm.Control type="text" name="postCity" className={s.field}
                                                   onChange={formik.handleChange} onBlur={formik.handleBlur}
                                                   value={formik.values.postCity}/>
                            {formik.touched.postCity && formik.errors.postCity ? (
                                <BootstrapForm.Text
                                    className="text-danger">{formik.errors.postCity}</BootstrapForm.Text>
                            ) : null}
                        </BootstrapForm.Group>
                        <BootstrapForm.Group className="mb-3" controlId="formBasicPostNumber">
                            <BootstrapForm.Label className={s.formLabel}>{t("postNumber")}</BootstrapForm.Label>
                            <BootstrapForm.Control type="text" name="postNumber" className={s.field}
                                                   onChange={formik.handleChange} onBlur={formik.handleBlur}
                                                   value={formik.values.postNumber}/>
                            {formik.touched.postNumber && formik.errors.postNumber ? (
                                <BootstrapForm.Text
                                    className="text-danger">{formik.errors.postNumber}</BootstrapForm.Text>
                            ) : null}
                        </BootstrapForm.Group>
                    </>)}


                <label className={s.label}>
                    <input type="checkbox" checked={isChecked}
                           onChange={handleCheckboxChange} className={s.checkbox}
                           name="agree"/>
                    <span className={s.box}></span>
                    <p className={s.checkboxLabel}>
                        <span className={s.footerLabel1}>{t("formFooter1")}</span>
                        <br/>
                        <Link className={s.link2} href="/privacy-policy" onClick={() => dispatch(closeCartModal())}>
                            <span className={s.footerLabel2}>{t("formFooter2")}</span>
                        </Link>
                    </p>
                </label>

                <div className="d-flex justify-content-end">
                    <div className={s.totalPrice}>{t("totalSum")} {totalSum} {t("uah")}</div>
                </div>

                <div className={s.btnBlock}>
                    <button type="submit" className={s.btnSubmit}
                            disabled={!isChecked || formik.isSubmitting}>
                        {t('sendBtn')}
                    </button>
                </div>

            </BootstrapForm>
        </div>
    );
};

export default CartForm;


