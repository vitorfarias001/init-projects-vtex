import React, { useState, useEffect } from 'react'
import { useProduct } from 'vtex.product-context'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = ['modal', 'brand', 'categoryId', 'productName', 'close']

const MyContextProduct = () => {
  const handles = useCssHandles(CSS_HANDLES)
  const productContext = useProduct()
  const [isBuyButton, setIsBuyButton] = useState<boolean>()
  const [isModal, setIsModal] = useState<boolean>()

  useEffect(() => {
    setIsBuyButton(productContext.buyButton.clicked)
  }, [productContext])

  const Modal = () => {
    return (
      <>
        {!isModal ?
          <div className={handles.modal}>
            <span className={handles.close} onClick={() => { setIsModal(true) }}>Fechar</span>
            <p className={handles.brand}>{productContext.product.brand}</p>
            <p className={handles.categoryId}>{productContext.product.categoryId}</p>
            <h2 className={handles.productName}>{productContext.product.productName}</h2>
          </div>
          : ''}
      </>
    )
  }

  return (
    <>
      {isBuyButton ? <Modal /> : null}
    </>
  )

}

export default MyContextProduct
