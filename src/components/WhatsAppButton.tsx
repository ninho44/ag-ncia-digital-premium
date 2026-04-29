import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/constants/contact";

const WhatsAppButton = () => (
  <a
    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá%20quero%20falar%20sobre%20o%20projeto`}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp"
    className="whatsapp-pulse fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
  >
    <MessageCircle className="h-6 w-6" />
  </a>
);

export default WhatsAppButton;
