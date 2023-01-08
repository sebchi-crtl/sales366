import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'

function CarbonZeroWrapper({ totalPrice, purchaseRefId, purchasedItems }) {
  const [showZero, setShowZero] = useState(false)

  const openZero = () => {
    setShowZero(true)
  }
  const closeZero = () => {
    return setShowZero(false)
  }
  useEffect(() => {
    if (showZero) {
      const zero = document.querySelector('.carbon-zero')
      zero.addEventListener('close-carbon-zero', () => {
        closeZero()
      })
    }
  }, [showZero])
  return (
    <div className="wrrapper">
      {showZero && (
        <carbon-zero
          class="carbon-zero"
          merchant-id={process.env.REACT_APP_CARBON_ZERO_MERCHANT_ID}
          api-key={process.env.REACT_APP_CARBON_ZERO_API_KEY}
          country="NG"
          total-price={totalPrice}
          purchase-ref-id={purchaseRefId}
          purchase-items={purchasedItems}
        ></carbon-zero>
      )}
      <Button className="mt-3 col-12 " onClick={openZero}>Pay</Button>
    </div>
  )
}

export default CarbonZeroWrapper