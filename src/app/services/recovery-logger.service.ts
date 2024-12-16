import { Injectable } from '@angular/core';
import { Product, ProductLog } from './product-recovery-record';

@Injectable({
  providedIn: 'root',
})
export class RecoveryLoggerService {
  private products: Product[] = [
    {
      productID: 'P001',
      productName: 'Hypervolt 2',
      logs: [
    {
      logID: 'L55947',
      dateUsed: '2024-12-31',
      timeUsed: 44
    },
    {
      logID: 'L84227',
      dateUsed: '2025-01-14',
      timeUsed: 43
    },
    {
      logID: 'L17252',
      dateUsed: '2025-01-02',
      timeUsed: 59
    },
    {
      logID: 'L74285',
      dateUsed: '2025-01-23',
      timeUsed: 13
    },
    {
      logID: 'L47420',
      dateUsed: '2024-12-11',
      timeUsed: 47
    },
    {
      logID: 'L33545',
      dateUsed: '2025-01-06',
      timeUsed: 12
    },
    {
      logID: 'L80212',
      dateUsed: '2025-01-15',
      timeUsed: 18
    },
    {
      logID: 'L04817',
      dateUsed: '2024-12-28',
      timeUsed: 60
    },
    {
      logID: 'L73888',
      dateUsed: '2024-12-17',
      timeUsed: 31
    },
    {
      logID: 'L82053',
      dateUsed: '2024-11-30',
      timeUsed: 58
    },
    {
      logID: 'L31922',
      dateUsed: '2025-01-12',
      timeUsed: 32
    },
    {
      logID: 'L92991',
      dateUsed: '2025-01-26',
      timeUsed: 46
    },
    {
      logID: 'L43159',
      dateUsed: '2025-01-23',
      timeUsed: 20
    },
    {
      logID: 'L80212',
      dateUsed: '2024-12-11',
      timeUsed: 25
    },
    {
      logID: 'L10712',
      dateUsed: '2024-12-18',
      timeUsed: 44
    },
    {
      logID: 'L48711',
      dateUsed: '2025-01-08',
      timeUsed: 31
    },
    {
      logID: 'L78508',
      dateUsed: '2025-01-01',
      timeUsed: 60
    },
    {
      logID: 'L35499',
      dateUsed: '2025-01-30',
      timeUsed: 44
    },
    {
      logID: 'L83670',
      dateUsed: '2024-12-29',
      timeUsed: 18
    },
    {
      logID: 'L10929',
      dateUsed: '2025-01-09',
      timeUsed: 16
    },
    {
      logID: 'L00963',
      dateUsed: '2024-12-11',
      timeUsed: 42
    },
    {
      logID: 'L06715',
      dateUsed: '2025-01-13',
      timeUsed: 46
    },
    {
      logID: 'L42532',
      dateUsed: '2024-12-30',
      timeUsed: 41
    },
    {
      logID: 'L82727',
      dateUsed: '2024-12-16',
      timeUsed: 27
    },
    {
      logID: 'L60770',
      dateUsed: '2024-12-08',
      timeUsed: 51
    }
    ]
    },
    {
      productID: 'P002',
      productName: 'Theragun Elite',
      logs: [
    {
      logID: 'L41997',
      dateUsed: '2025-01-02',
      timeUsed: 29
    },
    {
      logID: 'L20620',
      dateUsed: '2024-12-14',
      timeUsed: 31
    },
    {
      logID: 'L18878',
      dateUsed: '2025-01-18',
      timeUsed: 28
    },
    {
      logID: 'L46482',
      dateUsed: '2025-01-28',
      timeUsed: 60
    },
    {
      logID: 'L77000',
      dateUsed: '2024-12-01',
      timeUsed: 45
    },
    {
      logID: 'L37750',
      dateUsed: '2025-01-07',
      timeUsed: 12
    },
    {
      logID: 'L67288',
      dateUsed: '2024-12-22',
      timeUsed: 27
    },
    {
      logID: 'L02093',
      dateUsed: '2025-01-15',
      timeUsed: 11
    },
    {
      logID: 'L29068',
      dateUsed: '2025-01-07',
      timeUsed: 49
    },
    {
      logID: 'L24368',
      dateUsed: '2025-01-20',
      timeUsed: 21
    },
    {
      logID: 'L43960',
      dateUsed: '2025-01-11',
      timeUsed: 24
    },
    {
      logID: 'L67540',
      dateUsed: '2024-12-05',
      timeUsed: 44
    },
    {
      logID: 'L70139',
      dateUsed: '2024-12-29',
      timeUsed: 48
    },
    {
      logID: 'L21774',
      dateUsed: '2025-01-19',
      timeUsed: 19
    },
    {
      logID: 'L48402',
      dateUsed: '2024-12-29',
      timeUsed: 13
    },
    {
      logID: 'L13949',
      dateUsed: '2024-12-31',
      timeUsed: 21
    },
    {
      logID: 'L64987',
      dateUsed: '2024-12-18',
      timeUsed: 51
    },
    {
      logID: 'L96511',
      dateUsed: '2024-12-22',
      timeUsed: 36
    },
    {
      logID: 'L16507',
      dateUsed: '2024-12-15',
      timeUsed: 50
    },
    {
      logID: 'L42650',
      dateUsed: '2025-01-26',
      timeUsed: 11
    },
    {
      logID: 'L67197',
      dateUsed: '2024-12-07',
      timeUsed: 43
    },
    {
      logID: 'L96500',
      dateUsed: '2025-01-19',
      timeUsed: 25
    },
    {
      logID: 'L14222',
      dateUsed: '2025-01-02',
      timeUsed: 50
    },
    {
      logID: 'L02964',
      dateUsed: '2025-01-02',
      timeUsed: 35
    },
    {
      logID: 'L43567',
      dateUsed: '2025-01-16',
      timeUsed: 34
    }
    ]
    },
    {
      productID: 'P003',
      productName: 'Theragun Pro',
      logs: [
    {
      logID: 'L56783',
      dateUsed: '2025-01-22',
      timeUsed: 56
    },
    {
      logID: 'L24966',
      dateUsed: '2025-01-24',
      timeUsed: 18
    },
    {
      logID: 'L41656',
      dateUsed: '2025-01-16',
      timeUsed: 26
    },
    {
      logID: 'L04693',
      dateUsed: '2024-12-20',
      timeUsed: 15
    },
    {
      logID: 'L54187',
      dateUsed: '2025-01-01',
      timeUsed: 45
    },
    {
      logID: 'L55349',
      dateUsed: '2024-12-29',
      timeUsed: 52
    },
    {
      logID: 'L88060',
      dateUsed: '2025-01-06',
      timeUsed: 22
    },
    {
      logID: 'L05295',
      dateUsed: '2025-01-25',
      timeUsed: 55
    },
    {
      logID: 'L24013',
      dateUsed: '2025-01-25',
      timeUsed: 10
    },
    {
      logID: 'L35583',
      dateUsed: '2025-01-26',
      timeUsed: 38
    },
    {
      logID: 'L36189',
      dateUsed: '2025-01-24',
      timeUsed: 26
    },
    {
      logID: 'L21437',
      dateUsed: '2025-01-23',
      timeUsed: 49
    },
    {
      logID: 'L62826',
      dateUsed: '2025-01-26',
      timeUsed: 32
    },
    {
      logID: 'L28347',
      dateUsed: '2024-12-30',
      timeUsed: 38
    },
    {
      logID: 'L24752',
      dateUsed: '2024-12-31',
      timeUsed: 43
    },
    {
      logID: 'L28425',
      dateUsed: '2024-12-28',
      timeUsed: 12
    },
    {
      logID: 'L62232',
      dateUsed: '2024-12-23',
      timeUsed: 28
    },
    {
      logID: 'L27459',
      dateUsed: '2024-12-31',
      timeUsed: 22
    },
    {
      logID: 'L86874',
      dateUsed: '2025-01-03',
      timeUsed: 31
    },
    {
      logID: 'L64516',
      dateUsed: '2024-12-31',
      timeUsed: 57
    },
    {
      logID: 'L38935',
      dateUsed: '2025-01-05',
      timeUsed: 52
    },
    {
      logID: 'L15796',
      dateUsed: '2025-01-22',
      timeUsed: 31
    },
    {
      logID: 'L56222',
      dateUsed: '2024-12-09',
      timeUsed: 27
    },
    {
      logID: 'L50763',
      dateUsed: '2025-01-11',
      timeUsed: 59
    },
    {
      logID: 'L67080',
      dateUsed: '2025-01-14',
      timeUsed: 15
    }
    ]
    },
    {
      productID: 'P004',
      productName: 'Hypervolt Pro',
      logs: [
    {
      logID: 'L33058',
      dateUsed: '2025-01-25',
      timeUsed: 49
    },
    {
      logID: 'L45255',
      dateUsed: '2024-12-05',
      timeUsed: 30
    },
    {
      logID: 'L39717',
      dateUsed: '2024-12-16',
      timeUsed: 30
    },
    {
      logID: 'L94471',
      dateUsed: '2024-12-21',
      timeUsed: 31
    },
    {
      logID: 'L87978',
      dateUsed: '2025-01-08',
      timeUsed: 28
    },
    {
      logID: 'L99470',
      dateUsed: '2025-01-14',
      timeUsed: 28
    },
    {
      logID: 'L34978',
      dateUsed: '2024-12-13',
      timeUsed: 34
    },
    {
      logID: 'L55946',
      dateUsed: '2025-01-05',
      timeUsed: 18
    },
    {
      logID: 'L89649',
      dateUsed: '2025-01-30',
      timeUsed: 38
    },
    {
      logID: 'L33220',
      dateUsed: '2025-01-08',
      timeUsed: 51
    },
    {
      logID: 'L89374',
      dateUsed: '2025-01-19',
      timeUsed: 40
    },
    {
      logID: 'L11473',
      dateUsed: '2025-01-27',
      timeUsed: 47
    },
    {
      logID: 'L29561',
      dateUsed: '2024-12-08',
      timeUsed: 47
    },
    {
      logID: 'L89105',
      dateUsed: '2025-01-23',
      timeUsed: 51
    },
    {
      logID: 'L89324',
      dateUsed: '2024-12-03',
      timeUsed: 19
    },
    {
      logID: 'L98761',
      dateUsed: '2025-01-18',
      timeUsed: 40
    },
    {
      logID: 'L57911',
      dateUsed: '2024-12-27',
      timeUsed: 41
    },
    {
      logID: 'L18999',
      dateUsed: '2025-01-08',
      timeUsed: 20
    },
    {
      logID: 'L43472',
      dateUsed: '2025-01-16',
      timeUsed: 13
    },
    {
      logID: 'L76627',
      dateUsed: '2025-01-05',
      timeUsed: 20
    },
    {
      logID: 'L78498',
      dateUsed: '2025-01-28',
      timeUsed: 44
    },
    {
      logID: 'L98132',
      dateUsed: '2024-12-30',
      timeUsed: 28
    },
    {
      logID: 'L66453',
      dateUsed: '2024-12-18',
      timeUsed: 15
    },
    {
      logID: 'L80163',
      dateUsed: '2025-01-15',
      timeUsed: 19
    },
    {
      logID: 'L67475',
      dateUsed: '2024-12-14',
      timeUsed: 36
    }
    ]
    }
    ];

  constructor() {}

  getAllProducts(): Product[] {
    return this.products;
  }

  getProductByID(id: string): Product | undefined {
    return this.products.find((p) => p.productID === id);
  }
  addProductLog(productID: string, dateUsed: string, timeUsed: number): void {
    const product = this.getProductByID(productID);
    if (product) {
      const newLogID = 'L' + Math.floor(Math.random() * 1000000).toString();
      const newLog = { logID: newLogID, dateUsed, timeUsed };
      product.logs.push(newLog);
    }
  }
  addProduct(productName: string): void {
    const newProductID = 'P' + Math.floor(Math.random() * 1000000).toString();
    const newProduct = {
      productID: newProductID,
      productName: productName,
      logs: []
    };
    this.products.push(newProduct);
  }
}