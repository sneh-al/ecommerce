import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Divider,
  } from "@nextui-org/react";
const CheckOut = () => {
  return (
    <div>
          <Card>
            <CardHeader>
              <h1>Cart Totol</h1>
            </CardHeader>
            <CardBody>
              <div>
                <p className="font-semibold">Shipping (3-5 days)</p>
                <p className="font-bold"></p>
              </div>
              <div>
                <p className="font-semibold">GST </p>
                <p className="font-bold"></p>
              </div>
              <div>
                <p className="font-semibold">CGST </p>
                <p className="font-bold"></p>
              </div>
              <div>
                <p className="font-semibold">Subtotal</p>
                <p className="font-bold"></p>
              </div>
              <Divider />
              <div>
                <p className="font-semibold">Totoal</p>
              </div>
            </CardBody>
          </Card>
        </div>
  )
}

export default CheckOut