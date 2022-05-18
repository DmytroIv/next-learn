import axios from "axios";
import { useState } from "react";
import { IReviewFormProps } from "./ReviewForm.props";
import { Input } from "../Input/Input";
import { Textarea } from "../Textarea/Textarea";
import { useForm, Controller } from "react-hook-form";
import { Rating } from "../Rating/Rating";
import { Button } from "../Button/Button";
import { IReviewForm, IReviewSendResponse } from "./ReviewForm.interface";
import { API } from "../../helpers/api";

import cn from 'classnames';
import styles from './ReviewForm.module.css';

export const ReviewForm = ({ productId, isOpened, className, ...props }: IReviewFormProps): JSX.Element => {
  const { register, control, handleSubmit, formState: { errors }, reset, clearErrors } = useForm<IReviewForm>();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>();


  const onSubmit = async (formData: IReviewForm) => {
    try {
      const { data } = await axios.post<IReviewSendResponse>(API.review.createDemo, {
        ...formData,
        productId
      });

      if (data.message) {
        setIsSuccess(true);
        reset();
      } else {
        setError('Something went wrong.');
      }
    } catch (err) {
      // setError(err?.message);
    }

  };

  return (
    <form onSubmit={ handleSubmit(onSubmit) }>
      <div className={ cn(styles.reviewForm, className) } { ...props }>
        <Input tabIndex={ isOpened ? 0 : -1 } { ...register('name', {
          required: { value: true, message: 'Write your name' }
        })
        }
               error={ errors.name }
               placeholder="Name"
               aria-invalid={ !!errors.name }
        />
        <Input tabIndex={ isOpened ? 0 : -1 } { ...register('title', {
          required: { value: true, message: 'Write your title' }
        }) }
               error={ errors.title }
               placeholder="Title"
               className={ styles.title }
               aria-invalid={ !!errors.title }
        />
        <div className={ styles.rating }>
          <span>Rate it:</span>
          <Controller control={ control }
                      name="rating"
                      rules={ { required: { value: true, message: 'Set rating' } } }
                      render={ ({ field }) => (
                        <Rating tabIndex={ isOpened ? 0 : -1 }
                                rating={ field.value }
                                error={ errors.rating }
                                ref={ field.ref }
                                isEditable={ true }
                                setRating={ field.onChange } />
                      ) } />
        </div>
        <Textarea tabIndex={ isOpened ? 0 : -1 } { ...register('description', {
          required: {
            value: true,
            message: 'Write your message description'
          }
        }) }
                  error={ errors.description }
                  placeholder="Message text..."
                  className={ styles.description }
                  aria-label="Message text"
                  aria-invalid={ !!errors.description }
        />
        <div className={ styles.submit }>
          <Button appearance="primary"
                  tabIndex={ isOpened ? 0 : -1 }
                  onClick={ () => clearErrors() }
          >Send</Button>
          <span className={ styles.info }>* lorem text ...</span>
        </div>
      </div>
      { isSuccess && <div className={ styles.success } role="alert">
        <b className={ styles.successTitle }>Your review successfully has sent</b>
        <div>Thank you for your review, it will be shown after moderate.</div>
        <Button tabIndex={ isOpened ? 0 : -1 }
                onClick={ () => setIsSuccess(false) }
                appearance="ghost"
                className={ styles.close }
                aria-label="close success alert"
        >⤫</Button>
      </div> }
      { error && <div className={ styles.error } role="alert">
        <div>{ error }</div>
        <Button tabIndex={ isOpened ? 0 : -1 }
                onClick={ () => setError(undefined) }
                appearance="ghost"
                className={ styles.close }
                aria-label="close error alert"
        >⤫</Button>
      </div> }
    </form>
  );
};
