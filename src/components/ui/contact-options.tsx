import siteInfo from "@/constants/siteInfo";
import { WhatsAppOutlined } from "@ant-design/icons";
import { Phone, Mail, MapPin } from "lucide-react";
import React from "react";

const ContactOptions = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="text-primary font-bold text-lg">Contact</h3>
      <div className="flex flex-col gap-3">
        <a
          href="https://wa.me/905323456789"
          className="flex gap-4 items-center"
        >
          <WhatsAppOutlined className="text-2xl" />
          <span className="text-sm">{siteInfo.contact.phone}</span>
        </a>

        <a
          href={"tel:" + siteInfo.contact.phone}
          className="flex gap-4 items-center"
        >
          <Phone size={24} />
          <span className="text-sm">{siteInfo.contact.phone}</span>
        </a>
        <a
          href={"mailto:" + siteInfo.contact.email}
          className="flex gap-4 items-center"
        >
          <Mail size={24} />
          <span className="text-sm">{siteInfo.contact.email}</span>
        </a>

        <a
          href={siteInfo.contact.googleMapsUrl}
          target="_blank"
          rel="noreferrer"
          className="flex gap-4 items-center"
        >
          <MapPin size={24} />
          <span className="text-sm">{siteInfo.title}</span>
        </a>
      </div>
    </div>
  );
};

export default ContactOptions;
