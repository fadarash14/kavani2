import TableContentAccounts from "@/components/registered-accounts/TableContentAccounts";

const RegisteredAccount = () => {
  return (
    <div className="flex flex-col">
      <TableContentAccounts
        selectedOption={{ value: "registered", label: "ثبت نام شده" }}
      />
    </div>
  );
};

export default RegisteredAccount;

// const options = [
//   { value: "registered", label: "ثبت نام شده" },
//   { value: "unregistered", label: "ثبت نام نشده" },
//   { value: "unmatched/mobile", label: "عدم تطبیق موبایل و کد ملی" },
//   { value: "unmatched/birthDate", label: "عدم احراز ثبت احوال" },
// ];

// const header: { [key: string]: string } = {
//   registered: "کاربرانی که ثبت نام کرده‌اند",
//   unregistered: "کاربرانی که هنوز ثبت نام نکرده‌اند",
//   "unmatched/mobile": "کاربرانی که موبایل و کد ملی آن‌ها تطابق ندارد",
//   "unmatched/birthDate":
//     "کاربرانی که تاریخ تولد آن‌ها با اطلاعات ثبت احوال تطابق ندارد",
// };
