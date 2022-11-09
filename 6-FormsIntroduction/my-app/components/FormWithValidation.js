import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

export default function CourseValidation() {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        defaultValues: {
            courseCode: '',
            active: true
        }
    });

    useEffect(() => {
        let data = {
            courseCode: "WEB422",
            active: true
        }

        // set the values of each form field to match "data"
        for (const prop in data) {
            setValue(prop, data[prop]);
        }
    }, []);

    function submitForm(data) {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(submitForm)}>
            Course Code:
            <input className={errors.courseCode && "inputError"} {...register("courseCode", { required: true })} placeholder="Course Code"/>
            {errors.courseCode?.type === "required" && <span className="inputErrorText"><br />Course Code is Required</span>}
            <br />

            Active:
            <input type="checkbox" {...register("active")} />
            <br />
            <br />
            <button type="submit" disabled={Object.keys(errors).length > 0}>Submit</button>
        </form>
    );
}