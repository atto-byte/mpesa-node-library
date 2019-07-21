import Mpesa from '../';
import { AxiosResponse } from 'axios';
/**
 * Reversal Request
 * @name ReversalRequest
 * @description Transaction Reversal API reverses a M-Pesa transaction.
 * @function
 * @see {@link https://developer.safaricom.co.ke/reversal/apis/post/request| Reversal Request}
 * @param  {string} transactionId                     The transaction id for reversal eg LKXXXX1234
 * @param  {string} queueUrl                          The path that stores information of time out transaction
 * @param  {string} resultUrl                         The path that stores information of transaction
 * @param  {string} [shortCode=null]                  Organization receiving the transaction
 * @param  {String} [remarks='Reversal']              Comments that are sent along with the transaction.
 * @param  {String} [occasion='Reversal']             Optional Parameter
 * @param  {[type]} [initiator=null]                  The name of Initiator to initiating the request
 * @param  {String} [receiverIdType='11']             Type of organization receiving the transaction
 * @param  {String} [commandId='TransactionReversal'] Takes only 'TransactionReversal' Command id
 * @return {Promise}
 */
export declare type ReversalOptions = {
  transactionId: string;
  amount: number;
  queueUrl: string;
  resultUrl: string;
  shortCode?: string;
  remarks?: string;
  occasion?: string;
  initiator?: string;
  receiverIdType?: string;
  commandId?: string;
};
export declare function reversal(
  mpesa: Mpesa,
  options: ReversalOptions
): Promise<AxiosResponse<any>>;
