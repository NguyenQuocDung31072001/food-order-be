import { Crud, CrudController } from '@dataui/crud';
import { Controller } from '@nestjs/common';
import { Voucher } from './entities/voucher.entity';
import { VoucherService } from './voucher.service';

@Crud({
  model: {
    type: Voucher,
  },
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
    },
  },
  query: {
    exclude: ['id'],
    join: {},
  },
})
@Controller('voucher')
export class VoucherController implements CrudController<Voucher> {
  constructor(public service: VoucherService) {}
}
