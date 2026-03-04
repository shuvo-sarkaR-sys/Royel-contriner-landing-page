import { z } from "zod";

export class UhaulService {
  // Api reference https://api.webselfstorage.com/
  private locationId = "59360";
  private baseUrl = "https://api.webselfstorage.com/v3/";

  public async getListings() {
    process.env.UHAUL_API_KEY;

    return await this.fetchUhaul(
      "location/" + this.locationId,
      locationFetchValidator
    );
  }

  public async getImages() {
    return await this.fetchUhaul(
      "location/" + this.locationId + "/images",
      imagesValidator
    );
  }

  public async getPaymentPortalUrl() {
    return await this.fetchUhaul(
      "location/" + this.locationId + "/paymentPortalUrl",
      z.string()
    );
  }

  private async fetchUhaul<TOutput extends z.ZodType>(
    path: string,
    schema: TOutput
  ): Promise<z.infer<TOutput>> {
    const response = await fetch(this.baseUrl + path, {
      headers: {
        Authorization: `Bearer ${process.env.UHAUL_API_KEY}`,
      },
    });
    const resJson = await response.json();
    return schema.parse(resJson);
  }
}

const dayHoursValidator = z.object({
  close: z.string(),
  isOpen: z.boolean(),
  open: z.string(),
});

const weekValidator = z.object({
  friday: dayHoursValidator,
  monday: dayHoursValidator,
  saturday: dayHoursValidator,
  sunday: dayHoursValidator,
  thursday: dayHoursValidator,
  tuesday: dayHoursValidator,
  wednesday: dayHoursValidator,
});
const locationFetchValidator = z.object({
  success: z.boolean(),
  errorMessage: z.string(),
  location: z.object({
    address: z.object({
      addressLine1: z.string().nullish(),
      addressLine2: z.string().nullish(),
      city: z.string(),
      country: z.string(),
      county: z.string().nullish(),
      destinationLatitude: z.number(),
      destinationLongitude: z.number(),
      destinationState: z.string().nullish(),
      formattedAddress: z.string().nullish(),
      location: z.object({
        latitude: z.number(),
        longitude: z.number(),
      }),
      originLatitude: z.number(),
      originLongitude: z.number(),
      postalCode: z.string(),
      state: z.string().nullish(),
    }),
    allowsReservations: z.boolean(),
    coupons: z.array(
      z.object({
        description: z.string(),
        instructions: z.string(),
      })
    ),
    facilityFeatures: z.array(
      z.object({
        description: z.string(),
        imageUrl: z.string(),
      })
    ),
    hoursOfOperation: z.object({
      gate: weekValidator,
      office: weekValidator,
    }),
    locationFeatures: z.array(
      z.object({
        description: z.string(),
      })
    ),
    locationServices: z.array(
      z.object({
        amount: z.number(),
        description: z.string(),
        locationServiceNumber: z.string(),
        taxable: z.string(),
      })
    ),
    name: z.string(),
    phone: z.string(),
    reservationDates: z.array(z.string()),
    reservationNotBelowPercentage: z.string(),
    reservationNotBelowTotalUnits: z.string(),
    reviewFee: z.number(),
    units: z.array(
      z.object({
        bonusComments: z.string(),
        cubicFootage: z.number(),
        orderGrouping: z.string(),
        squareFootage: z.number(),
        totalUnits: z.number(),
        unitFeature: z
          .object({
            access: z.string(),
            climate: z.string(),
            doors: z.string(),
            elevation: z.string(),
            floor: z.string(),
            product: z.string(),
          })
          .nullish(),
        unitStorageGuide: z
          .object({
            longDescription: z.string(),
            shortDescription: z.string(),
          })
          .nullish(),
        unitTypeImage: z
          .object({
            description: z.string(),
            popupDescription: z.string(),
            popupTitle: z.string(),
            imageExists: z.boolean(),
            mainImage: z.string(),
            thumbImage: z.string(),
          })
          .nullish(),
        height: z.number(),
        insuranceOptions: z.array(
          z.object({
            description: z.string(),
            due: z.number(),
            insuranceId: z.string(),
            monthlyRate: z.number(),
            percentage: z.number(),
            quantity: z.number(),
            selected: z.boolean(),
            tax: z.number(),
            total: z.number(),
          })
        ),
        isCampusStorage: z.boolean(),
        length: z.number(),
        monthly: z.number(),
        portable: z.object({
          isPortable: z.boolean(),
          onSiteOnly: z.boolean(),
          waiveDeliveryFee: z.boolean(),
        }),
        serviceCharges: z
          .array(
            z.object({
              amount: z.number(),
              description: z.string(),
              number: z.number(),
              quantity: z.number(),
              taxable: z.string(),
            })
          )
          .nullish(),
        sizeDescriptionsField: z.array(z.string()),
        unitId: z.string(),
        rentableObjectId: z.string(),
        unitSize: z.string(),
        vacantUnits: z.number(),
        width: z.number(),
      })
    ),
  }),
});

const imagesValidator = z.object({
  imageLinks: z.array(z.string()).nullish(),
  success: z.boolean(),
  errorMessage: z.string(),
});
