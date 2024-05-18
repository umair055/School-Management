import { Controller } from '@nestjs/common';
import { FilesService } from './files.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Files')
@ApiBearerAuth()
@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}
}
