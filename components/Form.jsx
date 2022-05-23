import React, { useState, useEffect } from 'react'
import { useFormspark } from '@formspark/use-formspark'
import Link from 'next/link'
import { BiArrowBack } from 'react-icons/bi'
import Aos from 'aos'
import 'aos/dist/aos.css'

const FORMSPARK_FORM_ID = '0tPVZmuX'

function Form() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  })

  const handleNameChange = (event) => {
    setName(event.target.value)
  }
  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }
  const handleMsgChange = (event) => {
    setMessage(event.target.value)
  }
  const handleSubmitEmail = async (e) => {
    e.preventDefault()
    await submit({ email, name, message })
    alert('Form submitted')
  }

  return (
    <div
      data-aos="fade-in"
      className="relative flex flex-col items-center justify-center w-screen h-screen bg-gray-100"
    >
      <div className="flex items-center self-start gap-2 my-3 ml-6 hover:opacity-80">
        <BiArrowBack />
        <Link href="/">Back to Home</Link>
      </div>
      <form
        id="contact-form"
        // method="POST"
        onSubmit={(e) => handleSubmitEmail(e)}
        className="flex flex-col w-5/6 gap-4 px-6 py-12 mx-auto bg-white rounded shadow-lg contact-form min-h-fit md:max-w-screen-md lg:max-h-fit"
      >
        <div className="mb-4 text-3xl font-medium contact-form-title md:text-4xl">
          <h2>Send us a Message!</h2>
        </div>
        <div className="relative w-full form-input-group">
          <input
            className={`h-12 w-full  rounded  border border-gray-200 p-5 shadow-sm outline-none`}
            type="text"
            name="name"
            id="name"
            required
            value={name}
            onChange={(e) => handleNameChange(e)}
          />
          <label
            className={`${
              name === '' ? '' : 'label-animation'
            } text-md absolute top-2 left-4 md:text-lg`}
            htmlFor="name"
          >
            Name
          </label>
        </div>
        <div className="relative w-full form-input-group">
          <input
            className={`h-12 w-full  rounded border border-gray-200  p-5 shadow-sm    outline-none`}
            type="email"
            name="email"
            id="email"
            aria-describedby="emailHelp"
            required
            value={email}
            onChange={(e) => handleEmailChange(e)}
          />
          <label
            className={`${
              email === '' ? '' : 'label-animation'
            } text-md absolute top-2 left-4 md:text-lg`}
            htmlFor="email"
          >
            Email
          </label>
        </div>
        <div className="relative w-full form-input-group">
          <textarea
            className={`h-40 w-full rounded  border border-gray-200 p-5 shadow-sm outline-none`}
            name="message"
            id="message"
            cols="30"
            rows="10"
            required
            value={message}
            onChange={(e) => handleMsgChange(e)}
          ></textarea>
          <label
            className={` ${
              message === '' ? '' : 'label-animation'
            } text-md absolute top-2 left-4 md:text-lg`}
            htmlFor="message"
          >
            Message
          </label>
        </div>
        <div className="w-full text-center">
          <button
            type="submit"
            disabled={submitting}
            className="w-full px-5 py-2 mt-3 text-center text-white rounded btn-hire-us md:mt-0"
          >
            Send{' '}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form
