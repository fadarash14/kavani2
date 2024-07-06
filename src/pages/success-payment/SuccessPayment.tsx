import CheckCircle from "@/assets/icons/check-circle-green-micro.svg?react";
const PaymentSuccess = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-16 rounded shadow-md text-center">
        <CheckCircle className="mx-auto mb-4 w-16 h-16 text-green-400" />
        <h2 className="text-xl mb-2">پرداخت شما با موفقیت انجام شد.</h2>
        <p className="text-lg text-gray-600 mb-4">با تشکر از خرید شما</p>
        {/* <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
          بازگشت به صفحه اصلی
        </button> */}
      </div>
    </div>
  );
};

export default PaymentSuccess;
