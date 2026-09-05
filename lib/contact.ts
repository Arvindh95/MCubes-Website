export const CONTACT_EMAIL = "mcubescsb@gmail.com";
export const CONTACT_PHONE_DISPLAY = "+60 19-311 4372";
export const CONTACT_PHONE_HREF = "tel:+60193114372";

const SUBJECT = "Consultancy enquiry";
const BODY = `Hello MCUBES Consultancy,

I would like to enquire about your advisory services.

Area of interest:
Organisation:
Brief description:

Thank you.`;

export const MAILTO_HREF = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  SUBJECT
)}&body=${encodeURIComponent(BODY)}`;
