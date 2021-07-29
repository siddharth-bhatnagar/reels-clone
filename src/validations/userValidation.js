import * as yup from 'yup';

export const userLoginSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(4).max(10).required()
});

export const userSignupSchema = yup.object().shape({
    name: yup.string().email().required(),
    email: yup.string().email().required(),
    password: yup.string().min(4).max(10).required()
});