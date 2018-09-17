import { Injectable, Inject } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { AwsProvider } from '../../app/aws-provider';
import { ddbToken } from '../../shared/shared.module';
@Injectable()
export class LabelsProvider{

  constructor(public amplifyService: AmplifyService,
              public awsProvider: AwsProvider,
              @Inject(ddbToken) private ddb: any) {

  }

  getLabelsForUser() {
    const listPromise = this.ddb.listTables({Limit: 10}).promise().then((data) => {
      console.log("got tables from dynamo db " + data);
    });
  }

  getPublicLabels() {


  }

}
