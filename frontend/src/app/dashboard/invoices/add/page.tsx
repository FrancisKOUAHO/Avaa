'use client'

import { useState } from 'react'

import {
  CircleCheck,
  CircleX,
  Flag,
  ImagePlus,
  Info,
  PencilLine,
  Send,
  Image,
  SquareMenu,
  Trash2,
  Plus,
} from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import ButtonUi from '@/components/atoms/button/button'
import Preview from '@/components/organisms/Preview/Preview'

interface LineItem {
  item: string
  rate: number
  qty: number
  lineTotal: number
}

const Page = () => {
  const [lineItems, setLineItems] = useState<LineItem[]>([])
  const [isEditable, setIsEditable] = useState<boolean[]>([])
  const [isEditableSubtotal, setIsEditableSubtotal] = useState<boolean>(false)
  const [editableNote, setEditableNote] = useState<boolean>(false)
  const [editableTerms, setEditableTerms] = useState<boolean>(false)
  const [completed, setCompleted] = useState<boolean>(false)

  const makeEditable = (index: number): void => {
    setIsEditable((prevState) => {
      const newState = [...prevState]
      newState[index] = !newState[index]
      return newState
    })
  }

  const saveInvoice = (index: number): void => {
    console.log('saveInvoice function called', index)
    setLineItems((prevState) =>
      prevState.map((lineItem, i) => {
        if (i === index) {
          return {
            ...lineItem,
            lineTotal: lineItem.rate * lineItem.qty,
          }
        }
        return lineItem
      }),
    )
  }

  const makeEditableSubtotal = (): void => {
    setIsEditableSubtotal((prevState) => !prevState)
  }

  const makeEditableNote = (): void => {
    setEditableNote((prevState) => !prevState)
  }

  const makeEditableTerms = (): void => {
    setEditableTerms((prevState) => !prevState)
  }

  const addLineItem = (): void => {
    console.log('addLineItem function called')
    setLineItems((prevState) => [
      ...prevState,
      {
        item: '',
        rate: 0,
        qty: 0,
        lineTotal: 0,
      },
    ])
  }

  const removeLineItem = (index: number): void => {
    setLineItems((prevState) => prevState.filter((_, i) => i !== index))
  }

  return (
    <section className="px-6 py-6">
      <div className="flex gap-12 text-black">
        <div className="w-3/4">
          <header className="flex justify-between items-center gap-12">
            <div className="flex justify-center items-center">
              <h3 className="text-black text-lg font-semibold">
                Create invoice
              </h3>
            </div>
            <div className="text-black">
              <a href="/" className="flex justify-center items-center gap-2">
                <SquareMenu />
                Inovoice List
              </a>
            </div>
          </header>

          <div className="bg-[#f2f5fd] p-6 mt-6 rounded-xl overflow-auto h-[80vh]">
            <div className="flex flex-col items-center">
              <div className="flex justify-between items-center w-full mb-6">
                <p className="flex justify-center items-center gap-2">
                  <Image className="text-blue-700" />
                  Add Logo
                </p>
                <Info />
              </div>

              <div className="border border-dashed border-gray-500 relative bg-[#e7effc] rounded-xl my-6 w-full">
                <input
                  type="file"
                  multiple
                  className="cursor-pointer relative block opacity-0 w-full h-full p-20 z-50"
                />
                <div className="text-center p-10 absolute top-0 right-0 left-0 m-auto">
                  <ImagePlus className="text-blue-700 w-20 h-20 m-auto mb-2" />
                  <h4>
                    Drop your image here or{' '}
                    <span className="text-blue-700">brower</span>
                  </h4>
                </div>
              </div>

              <div className="bg-[#e7effc] rounded-xl w-full">
                <div className="flex justify-between items-center p-6">
                  <p className="flex justify-center items-center gap-2">
                    <Flag className="text-blue-700" />
                    Company Details
                  </p>
                  {completed ? (
                    <CircleCheck className="text-green-500" />
                  ) : (
                    <CircleX className="text-red-500" />
                  )}
                </div>
                <div className="p-6">
                  <div className="grid w-full items-center gap-1.5 my-6">
                    <Label htmlFor="compagny" className="mb-2">
                      Compagny
                      <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:bg-white"
                      type="text"
                      id="compagny"
                      placeholder="Eva"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label htmlFor="address" className="mb-2">
                        Address
                      </Label>
                      <Input
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:bg-white"
                        type="text"
                        id="address"
                        placeholder="626 W Pender St #500, Vancouver, BC V6B 1V9, Canada"
                      />
                    </div>

                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label htmlFor="address2" className="mb-2">
                        Address 2
                      </Label>
                      <Input
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:bg-white"
                        type="text"
                        id="address2"
                        placeholder="626 W Pender St #500, Vancouver, BC V6B 1V9, Canada"
                      />
                    </div>

                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label htmlFor="city" className="mb-2">
                        City <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:bg-white"
                        type="text"
                        id="city"
                        placeholder="Vancouver"
                      />
                    </div>

                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label htmlFor="postalCode" className="mb-2">
                        Postal Code <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:bg-white"
                        type="text"
                        id="postalCode"
                        placeholder="V6B 1V9"
                      />
                    </div>

                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label htmlFor="country" className="mb-2">
                        Country <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:bg-white"
                        type="text"
                        id="country"
                        placeholder="Canada"
                      />
                    </div>

                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label htmlFor="phone" className="mb-2">
                        Phone <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:bg-white"
                        type="tel"
                        id="phone"
                        placeholder="+1 604-682-2344"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl my-6 w-full">
                <table className="table w-full text-gray-400 border-separate space-y-6 text-sm">
                  <thead className="border-b-2 border-gray-300 mb-4">
                    <tr>
                      <th className="flex items-center gap-2 p-3 text-center">
                        Item
                      </th>
                      <th className="p-3 text-center">Rate</th>
                      <th className="p-3 text-center">Qty</th>
                      <th className="p-3 text-center">Line Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {lineItems.map((lineItem, index) => (
                      <tr key={index} className="bg-[#e7effc] rounded-xl">
                        <td className="flex items-center gap-2 p-3 text-center">
                          {!isEditable[index] ? (
                            <button
                              className="flex items-center gap-2 w-full"
                              onClick={() => makeEditable(index)}
                            >
                              Entre an item invoice
                              <PencilLine
                                className="w-4 h-4 hover:text-blue-700"
                                id="item"
                              />
                            </button>
                          ) : (
                            <Input
                              className="mt-1 w-full px-3 py-2 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:bg-white"
                              type="text"
                              id="item"
                              placeholder="Design"
                              disabled={!isEditable[index]}
                              value={lineItem.item}
                            />
                          )}
                        </td>
                        <td className="p-3 text-center">
                          {!isEditable[index] ? (
                            <button
                              className="flex justify-center items-center gap-2 w-full"
                              onClick={() => makeEditable(index)}
                            >
                              €{lineItem.rate}
                              <PencilLine
                                className="w-4 h-4 hover:text-blue-700"
                                id="item"
                              />
                            </button>
                          ) : (
                            <Input
                              className="mt-1 w-full px-3 py-2 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:bg-white"
                              type="number"
                              id="rate"
                              placeholder="100"
                              disabled={!isEditable[index]}
                              value={lineItem.rate.toString()}
                            />
                          )}
                        </td>
                        <td className="p-3 text-center">
                          {!isEditable[index] ? (
                            <button
                              className="flex justify-center items-center gap-2 w-full"
                              onClick={() => makeEditable(index)}
                            >
                              {lineItem.qty}
                              <PencilLine
                                className="w-4 h-4 hover:text-blue-700"
                                id="item"
                              />
                            </button>
                          ) : (
                            <Input
                              className="mt-1 w-full px-3 py-2 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:bg-white"
                              type="number"
                              id="qty"
                              placeholder="1"
                              disabled={!isEditable[index]}
                              value={lineItem.qty.toString()}
                            />
                          )}
                        </td>
                        <td className="p-3 text-center">
                          <div className="flex justify-center items-center">
                            {!isEditable[index] ? (
                              <button
                                className="flex justify-center items-center gap-2 w-full"
                                onClick={() => makeEditable(index)}
                              >
                                €{lineItem.lineTotal}
                                <PencilLine
                                  className="w-4 h-4 hover:text-blue-700"
                                  id="item"
                                />
                              </button>
                            ) : (
                              <Input
                                className="mt-1 w-full px-3 py-2 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:bg-white"
                                type="number"
                                id="lineTotal"
                                placeholder="100"
                                disabled={!isEditable[index]}
                                value={lineItem.lineTotal.toString()}
                              />
                            )}

                            {!isEditable[index] ? (
                              <button
                                className="flex justify-center items-center gap-2 w-full"
                                onClick={() => removeLineItem(index)}
                              >
                                <Trash2 className="w-4 h-4 hover:text-blue-700" />
                              </button>
                            ) : (
                              <button
                                className="flex justify-center items-center gap-2 w-full"
                                onClick={() => saveInvoice(index)}
                              >
                                <Send className="w-4 h-4 hover:text-blue-700" />
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="flex justify-center items-center my-6 gap-2 text-sm">
                  <button
                    className="bg-blue-600 py-1 px-2 text-white"
                    onClick={addLineItem}
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                  <button
                    className="text-blue-700 text-sm"
                    onClick={addLineItem}
                  >
                    Add lime item
                  </button>
                </div>
              </div>

              <div className="flex flex-col w-full mb-6">
                <div className="flex justify-start items-center w-full gap-3 mb-2">
                  <p className="text-sm">Subtotal</p>
                  <hr className="w-full text-blue-700" />
                </div>
                <div>
                  <table className="table w-full text-gray-400 border-separate space-y-6 text-sm">
                    <tbody>
                      <tr className="bg-[#e7effc] rounded-xl">
                        <td className="flex items-center gap-2 p-3 text-center">
                          {!isEditableSubtotal ? (
                            <button
                              className="flex items-center gap-2 w-full"
                              onClick={makeEditableSubtotal}
                            >
                              Discount
                              <PencilLine
                                className="w-4 h-4 hover:text-blue-700"
                                id="item"
                              />
                            </button>
                          ) : (
                            <Input
                              className="mt-1 w-full px-3 py-2 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:bg-white"
                              type="text"
                              id="item"
                              placeholder="Design"
                            />
                          )}
                        </td>
                        <td className="p-3 text-center">
                          {!isEditableSubtotal ? (
                            <button
                              className="flex justify-center items-center gap-2 w-full"
                              onClick={makeEditableSubtotal}
                            >
                              €100
                              <PencilLine
                                className="w-4 h-4 hover:text-blue-700"
                                id="item"
                              />
                            </button>
                          ) : (
                            <Input
                              className="mt-1 w-full px-3 py-2 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:bg-white"
                              type="number"
                              id="rate"
                              placeholder="100"
                            />
                          )}
                        </td>
                        <td className="p-3 text-center">
                          {!isEditableSubtotal ? (
                            <button
                              className="flex justify-center items-center gap-2 w-full"
                              onClick={makeEditableSubtotal}
                            >
                              €100
                              <PencilLine
                                className="w-4 h-4 hover:text-blue-700"
                                id="item"
                              />
                            </button>
                          ) : (
                            <Input
                              className="mt-1 w-full px-3 py-2 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:bg-white"
                              type="number"
                              id="qty"
                              placeholder="1"
                            />
                          )}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex flex-col w-full mb-6">
                <div className="flex justify-start items-center w-full gap-3 mb-2">
                  <p className="text-sm">Total</p>
                  <hr className="w-full text-blue-700" />
                </div>
                <div>
                  <table className="table w-full text-gray-400 border-separate space-y-6 text-sm">
                    <tbody>
                      <tr className="bg-[#e7effc] rounded-xl">
                        <td className="flex items-center gap-2 p-3 text-center">
                          {!isEditableSubtotal ? (
                            <button
                              className="flex items-center gap-2 w-full"
                              onClick={makeEditableSubtotal}
                            >
                              Discount
                              <PencilLine
                                className="w-4 h-4 hover:text-blue-700"
                                id="item"
                              />
                            </button>
                          ) : (
                            <Input
                              className="mt-1 w-full px-3 py-2 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:bg-white"
                              type="text"
                              id="item"
                              placeholder="Design"
                            />
                          )}
                        </td>
                        <td className="p-3 text-center">
                          {!isEditableSubtotal ? (
                            <button
                              className="flex justify-center items-center gap-2 w-full"
                              onClick={makeEditableSubtotal}
                            >
                              €100
                              <PencilLine
                                className="w-4 h-4 hover:text-blue-700"
                                id="item"
                              />
                            </button>
                          ) : (
                            <Input
                              className="mt-1 w-full px-3 py-2 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:bg-white"
                              type="number"
                              id="rate"
                              placeholder="100"
                            />
                          )}
                        </td>
                        <td className="p-3 text-center">
                          {!isEditableSubtotal ? (
                            <button
                              className="flex justify-center items-center gap-2 w-full"
                              onClick={makeEditableSubtotal}
                            >
                              €100
                              <PencilLine
                                className="w-4 h-4 hover:text-blue-700"
                                id="item"
                              />
                            </button>
                          ) : (
                            <Input
                              className="mt-1 w-full px-3 py-2 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:bg-white"
                              type="number"
                              id="qty"
                              placeholder="1"
                            />
                          )}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex flex-col w-full mb-6">
                <div>
                  <table className="table w-full text-gray-400 border-separate space-y-6 text-sm">
                    <tbody>
                      <tr>
                        <td className="font-black text-black">
                          <h5>Amount Due</h5>
                        </td>
                        <td className="p-3 text-center font-black text-black">
                          €100
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="w-full my-">
                <div className="flex justify-between items-center w-full gap-3 mb-2">
                  <p className="font-black text-sm">Notes</p>
                </div>
                <div className="grid w-full items-center gap-1.5 my-2">
                  {!editableNote ? (
                    <button
                      className="w-full text-sm font-normal"
                      onClick={makeEditableNote}
                    >
                      Les factures devront être réglées en Euros (€) dès
                      réception, et au plus tard dans un délai de X jours (délai
                      inférieur ou égal à 45 jours fin de mois ou 60 jours) à
                      partir de la date de leur émission
                      <PencilLine
                        className="w-4 h-4 hover:text-blue-700"
                        id="item"
                      />
                    </button>
                  ) : (
                    <textarea
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:bg-white"
                      id="notes"
                      placeholder="Notes"
                    />
                  )}
                </div>
              </div>

              <div className="w-full">
                <div className="flex justify-between items-center w-full gap-3 mb-2">
                  <p className="font-black text-sm">Terms</p>
                </div>
                <div className="grid w-full items-center gap-1.5 my-2">
                  {!editableTerms ? (
                    <button
                      className="w-full text-sm font-normal"
                      onClick={makeEditableTerms}
                    >
                      Les factures devront être réglées en Euros (€) dès
                      réception, et au plus tard dans un délai de X jours (délai
                      inférieur ou égal à 45 jours fin de mois ou 60 jours) à
                      partir de la date de leur émission
                      <PencilLine
                        className="w-4 h-4 hover:text-blue-700"
                        id="item"
                      />
                    </button>
                  ) : (
                    <textarea
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:bg-white"
                      id="terms"
                      placeholder="Terms"
                    />
                  )}
                </div>
              </div>

              <div className="flex justify-end items-center gap-2 w-full my-8">
                <ButtonUi label="Enregistrer en tant que brouillon" />
                <ButtonUi label="Envoyer la facture" />
              </div>
            </div>
          </div>
        </div>

        <Preview />
      </div>
    </section>
  )
}

export default Page