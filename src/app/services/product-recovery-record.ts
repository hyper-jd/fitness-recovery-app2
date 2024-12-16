// product-recovery-record.ts (renamed or repurposed)

export interface ProductLog {
  logID: string;      // Unique ID for each usage log entry
  dateUsed: string;   // YYYY-MM-DD
  timeUsed: number;   // Duration in minutes
}

export interface Product {
  productID: string;  
  productName: string;
  logs: ProductLog[];
}