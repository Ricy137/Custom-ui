import { useRef, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import Input from '../Input'
import Button from '../Button'

export interface PinFormData {
   pin1: string
   pin2: string
   pin3: string
   pin4: string
   pin5: string
   pin6: string
}

export const useSubmitPin = () => {

   const submitPin = async (pin: PinFormData) => {
      //TODO:Test
      const fakedPromise = new Promise((resolve, reject) => {
         setTimeout(() => {
            resolve('success');
         }, 1000);
      });
      await fakedPromise;
   }

   return submitPin
}

const SentForm: React.FC = () => {
   const submitPin = useSubmitPin()
   const inputs = useRef<HTMLInputElement[]>([])

   const {
      register,
      handleSubmit: withSubmit,
      formState: { errors },
      setValue,
   } = useForm<PinFormData>()

   const handleSubmit = useCallback(
      async (data: PinFormData) => {
         await submitPin(data)
      },
      [submitPin]
   )

   // const { inTranscation, execTranscation } = useInTransaction(handleSubmit)

   const handleKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
         if (!/\d/.test(e.key)) return
         e.preventDefault()
         setValue(`pin${index + 1}` as keyof PinFormData, e.key)
            ; (e.target as any).value = e.key
         if (index === 5) {
            withSubmit(handleSubmit)()
            return
         }
         ; (e.target as any).form.elements[index + 1].focus()
      },
      []
   )

   return (
      <form
         onSubmit={withSubmit(handleSubmit)}
         className="flex flex-col items-center w-full gap-y-[16px]"
      >
         <div>
            You would recieve a pin number if the email is registered in our
            database
         </div>
         <div className="grid grid-cols-6 gap-x-[8px] w-full max-w-[384px]">
            {Array.from({ length: 6 }).map((_, index) => (
               <Input
                  {...register(`pin${index + 1}` as keyof PinFormData, {
                     required: true,
                     maxLength: 1,
                     min: 0,
                     max: 9,
                  })}
                  // error={!!errors[`pin${index + 1}` as keyof PinFormData]}
                  key={index}
                  autoFocus={index === 0}
                  ref={(el: HTMLInputElement) => {
                     inputs.current[index] = el
                  }}
                  onKeyDown={(e) => handleKeyDown(e, index)}
               // disabled={inTranscation}
               />
            ))}
         </div>
         <Button color="white" type="submit" className="w-full">
            Submit
         </Button>
      </form>
   )
}

export default SentForm