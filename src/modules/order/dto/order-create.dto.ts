import { BillingInformationDto } from './billing-infomation.dto';

export class OrderCreateDto extends BillingInformationDto {
  customer_id: string;
  payment_method_id: string;
  voucher_id: string | null;
  carts: string[]; // cartFood_ids
}
