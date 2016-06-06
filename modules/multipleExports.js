var multipleExports={
  genericMessage:' ... and this is a generic message from within a module that has multiple exports',
  multipleExportFunction:function(){
    return ' ... and this is returned from a function that is another of the many exports of the same module';
  }
}

module.exports=multipleExports;
