import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountModule } from '../account/account.module';
import { ReviewController } from './review.controller';
import { ReviewSchema } from './review.schema';
import { ReviewService } from './review.service';

@Module({
    imports:[
        MongooseModule.forFeature([
            {name: "Review", schema: ReviewSchema}
        ]),
        AccountModule
    ],
    controllers: [ReviewController],
    providers: [ReviewService]

})
export class ReviewModule {}
