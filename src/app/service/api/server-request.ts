export class ServerRequest
{
   public token: string = null;

   //---------------------------------------------------------------------------

   constructor(public task: string, public data: string)
   {
   }

   //---------------------------------------------------------------------------

   static getInstance(value: any): ServerRequest
   {
      const response = (value != null) ? new ServerRequest(value.task, value.data) : null;
      return response;
   }

   //---------------------------------------------------------------------------
}
