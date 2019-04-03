
const aws = require('aws-sdk')

aws.config.update({region: 'us-east-1'})

const s3 = new aws.S3({
  apiVersion: '2006-03-01',
  accessKeyId: 'AKIAJJ3B3YLBU4DDVQWA',
  secretAccessKey: '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'
})

s3.listBuckets(function (err, data) {
  if (err) {
    console.log('Error', err)
  } else {
    console.log('Success', data.Buckets)
  }
})