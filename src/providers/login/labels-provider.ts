import { Injectable } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { AwsProvider } from '../../app/aws-provider';
@Injectable()
export class LabelsProvider{

  constructor(public amplifyService: AmplifyService,
              public awsProvider: AwsProvider) {

  }

  getLabelsForUser() {
    const listPromise = this.awsProvider.ddb.listTables({Limit: 10}).promise().then((data) => {
      console.log("got tables from dynamo db " + data);
    });
  }

  getPublicLabels() {


  }

}
