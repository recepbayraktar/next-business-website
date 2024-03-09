import React from "react";
import { Formik, Form, Field } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { Button } from "./button";
import FormInput from "./form-input";

const AppointmentForm = () => {
  const contactSchema = z.object({
    name: z.string().min(2).max(50),
    email: z.string().email(),
    message: z.string().min(10).max(500),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        message: "",
      }}
      validationSchema={toFormikValidationSchema(contactSchema)}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className="flex flex-col gap-4">
        <Field
          component={FormInput}
          name="name"
          placeholder="Name"
          className="w-full"
        />

        <div className="flex gap-2">
          <input type="checkbox" />
          <span className="text-xs">
            I agree to the processing of my personal information
          </span>
        </div>

        <Button type="submit" className="w-full">
          Send
        </Button>
      </Form>
    </Formik>
  );
};

export default AppointmentForm;
