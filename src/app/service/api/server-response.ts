export class ServerResponse
{
   //---------------------------------------------------------------------------

   constructor(public status: string,  public data: string)
   {
   }

   //---------------------------------------------------------------------------

   static getInstance(value: any): ServerResponse
   {
      const response = (value != null) ? new ServerResponse(value.status, value.data) : null;
      return response;
   }

   //---------------------------------------------------------------------------
}
