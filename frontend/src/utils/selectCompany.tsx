import { FaCcVisa, FaCcMastercard } from 'react-icons/fa';
import { BsCreditCard } from 'react-icons/bs';

export const selectCompany = (company: string) => {
  if (company === 'Visa') {
    return <FaCcVisa className="text-darkBlue" size={48} />;
  }
  if (company === 'MasterCard') {
    return <FaCcMastercard className="text-amber-600" size={48} />;
  }
  return <BsCreditCard size={48} />;
};
