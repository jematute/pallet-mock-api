export interface Case {
    barcode: { 
        data: number,
        textColor: string,
        backgroundColor: string
    },
    status: { 
        data: string,
        textColor: string,
        backgroundColor: string
    },
    loadId: { 
        data: number,
        textColor: string,
        backgroundColor: string
    },
    palletStatus: { 
        data: string,
        textColor: string,
        backgroundColor: string
    },
    palletId: { 
        data: number,
        textColor: string,
        backgroundColor: string
    },
    user: { 
        data: string,
        textColor: string,
        backgroundColor: string
    },
    manualWrap: { 
        data: string,
        textColor: string,
        backgroundColor: string
    },
}