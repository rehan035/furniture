/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';

type CategoryId = 'all' | 'living' | 'dining' | 'bedroom' | 'storage' | 'study';

interface CollectionItem {
  id: string;
  category: Exclude<CategoryId, 'all'>;
  categoryBadge: string;
  title: string;
  subtitleBadge: string;
  description: string;
  specs: string;
  imageUrl: string;
  imageAlt: string;
  whatsappText: string;
  dimensionsRange: string;
  leadTime: string;
  joineryDetail: string;
}

interface TimberSwatch {
  id: string;
  name: string;
  origin: string;
  toneHex: string;
  grainHighlight: string;
  moistureLevel: string;
  notes: string;
}

const TIMBER_SWATCHES: TimberSwatch[] = [
  {
    id: 'walnut',
    name: 'American Dark Walnut',
    origin: 'Kiln-Dried Select Grade',
    toneHex: '#3B281B',
    grainHighlight: '#5A3E2B',
    moistureLevel: '8% – 10% Equilibrium',
    notes: 'Deep chocolate heartwood with sweeping cathedral grain and hand-rubbed matte organic wax.'
  },
  {
    id: 'teak',
    name: 'Burmese & Golden Teak',
    origin: 'Seasoned Old-Growth Stock',
    toneHex: '#7A4B24',
    grainHighlight: '#9E6637',
    moistureLevel: '9% – 11% Equilibrium',
    notes: 'Naturally oil-rich golden amber timber prized for dimensional stability across monsoon seasons.'
  },
  {
    id: 'sheesham',
    name: 'Seasoned Rosewood (Sheesham)',
    origin: 'Punjab & Northern Belt',
    toneHex: '#523018',
    grainHighlight: '#885123',
    moistureLevel: '8% – 10% Kiln-Cured',
    notes: 'High-density indigenous hardwood featuring dramatic interlocking dark streaks and heirloom strength.'
  },
  {
    id: 'oak',
    name: 'Quarter-Sawn White Oak',
    origin: 'Architectural Millwork Grade',
    toneHex: '#A68966',
    grainHighlight: '#C4AA87',
    moistureLevel: '8% – 9% Kiln-Cured',
    notes: 'Tightly grained warm neutral timber ideal for fluted tambour doors and full-height wardrobes.'
  }
];

const COLLECTIONS: CollectionItem[] = [
  {
    id: 'walnut-lounge',
    category: 'living',
    categoryBadge: 'Living Room',
    title: 'Walnut Lounge & Accent Seating',
    subtitleBadge: 'Made to Order',
    description:
      'Ergonomically sculpted solid walnut frames paired with premium textured weave upholstery and matching organic nesting side tables.',
    specs: 'Solid Walnut · Textured Weave · Organic Edges',
    imageUrl:
      'https://lh3.googleusercontent.com/aida/AEtjO1XeDV2iudGfOZKXPmVm4Etkx9iPdDbL6XiSeH9y792xcRvOhU8ewsOmRh1zxb8jEdRqRUGy3KUFRNU5kzhU3Q6kYCEm-RBe2-O32hshh3PVN0-Xw3gDaZh0fjrMDlcXSFZhnt7aJes1ZxA9zCvViogKtkZH6zkeVpcm2GZ3vGtGzuJP40BPbbGt3dmlBb-p67rrFceQcLHlOON6g92G30fXbEn3Lv2TvxuPaeYCk9sfdhAV42ueEubZbwc',
    imageAlt:
      'Contemporary living room vignette featuring a deep charcoal and walnut armchair, sculpted solid wood nesting side tables, textured woven wool throw, elegant oak wood paneling in background, warm directional sunlight, high craftsmanship details.',
    whatsappText:
      'Assalam-o-Alaikum! I am interested in the Walnut Lounge & Accent Seating collection at Spike Wood Furniture.',
    dimensionsRange: 'Custom 1-Seater, 2-Seater & 3-Seater Suites',
    leadTime: '3 – 4 Weeks Workshop Commission',
    joineryDetail: 'Wedged Mortise & Tenon Frame'
  },
  {
    id: 'live-edge-dining',
    category: 'dining',
    categoryBadge: 'Dining Suite',
    title: 'Live-Edge Dining Suites',
    subtitleBadge: 'Custom Slabs',
    description:
      'Generous hand-finished solid teak & walnut dining tables displaying organic grain profiles, matched with master-woven Scandinavian dining chairs.',
    specs: 'Solid Teak / Sheesham · Natural Live Edge',
    imageUrl:
      'https://lh3.googleusercontent.com/aida/AEtjO1UDlihDrfeXgTRFt_MPYXCnTUMccnvjT6sQp5AyFuleD7peUL_eE65-OTySeAtboM56xVd7_K43Ax7t-kx3025ecTZ5mlk1cBBx9ZcCP-K4GjY1miPtk-hTipL5sQzftn7SEggPW_yAl_YaJiCLF1lrexMIO-XLUkkQqCDad3xbTWcwENvGMaDODvsRX2Dt29UG1jX87U_w3Wu_MFQ7zYjdEk57PS6SnKW2iIOUFc5fX-PJdLoykfNbC14',
    imageAlt:
      'Luxurious modern dining room featuring a live-edge solid teak and walnut dining table with seating for eight, curved wooden dining chairs with natural beige woven seats, warm pendant light suspended above, minimalist stone wall in background.',
    whatsappText:
      'Assalam-o-Alaikum! I am inquiring about the Live-Edge Dining Suites at Spike Wood Furniture.',
    dimensionsRange: '6-Seater (7 ft) to 12-Seater (12 ft) Slabs',
    leadTime: '4 – 5 Weeks Workshop Commission',
    joineryDetail: 'Butterfly Dovetail Keys & Steel C-Channels'
  },
  {
    id: 'platform-bed',
    category: 'bedroom',
    categoryBadge: 'Bedroom Suite',
    title: 'Artisanal Platform Bed Suites',
    subtitleBadge: 'Bespoke Frame',
    description:
      'Architectural solid hardwood platform beds with continuous grain headboards, integrated floating cantilever nightstands, and concealed support joinery.',
    specs: 'Continuous Walnut Grain · Integrated Floating Units',
    imageUrl:
      'https://lh3.googleusercontent.com/aida/AEtjO1XhvjIyKokFMIRYPgqD-rsyZ_EjqTbWuZHrnx2jwS0syjByFe7DXdh0EwGGJuyWZP4m5tQleIKOJkBp0KZN0ND6Lk6e2oC8mNrNJ3KPuTSo3f49_J941D4L6uAUfJkSsKR-UC0edswJpa9FxJLc3u6CH6ImTwcW0y8wW-R_sTKuMcDOpHnbNXtAIsxB_dIzYbIkGiNxnSoj718-noQaKagGf8W9GAqqp6tseXeMEPWx4Ldydd3Sd_wr3w',
    imageAlt:
      'High-end master bedroom suite featuring an artisanal solid walnut platform bed with an integrated sculpted wood headboard, premium neutral linen bedding, matching walnut floating nightstands with warm glowing brass sconce lamps.',
    whatsappText:
      'Assalam-o-Alaikum! I would like details and availability for the Artisanal Platform Bed Suites.',
    dimensionsRange: 'King (6×6.5 ft), Super King & Custom Wall-Span',
    leadTime: '4 Weeks Workshop Commission',
    joineryDetail: 'Interlocking Knock-Down Mitred Rail Joinery'
  },
  {
    id: 'bespoke-storage',
    category: 'storage',
    categoryBadge: 'Architectural Storage',
    title: 'Bespoke Storage & Wardrobes',
    subtitleBadge: 'Custom Fit',
    description:
      'Custom configured solid oak & walnut armoires with fluted architectural brass hardware, soft-close joinery, and tailored interior storage modules.',
    specs: 'White Oak & Walnut · Fluted Brass Hardware',
    imageUrl:
      'https://lh3.googleusercontent.com/aida/AEtjO1VqNwgWuJDjlRPmV131BV7AcwIw9EpOS5eyfCrbcrIxeDw034YiVNqA8UbX2_-Sr4_k-P5WG8D6j4VdhzjgGGcck0TQQRglihH6PlfxVaING2k4UFiiHEMk2vS50hESNHN6SRlZNbgpyeyOkFMw4hlWkfeldzPVXncXc1aKajDOplZgdRwoZQnm9LHype30BHT35k8Zv3M9717r-q2LGVForxc40eUaUxBkODuEhKl85S2pvwXjj7usSOk',
    imageAlt:
      'Minimalist bespoke wooden wardrobe and storage armoire in natural solid white oak and walnut with brass fluted pull handles, built-in ambient lighting, elegant dressing room setting.',
    whatsappText:
      'Assalam-o-Alaikum! I am inquiring about Bespoke Storage & Architectural Wardrobes at Spike Wood Furniture.',
    dimensionsRange: 'Floor-to-Ceiling Built-In or Freestanding Armoires',
    leadTime: '4 – 6 Weeks On-Site & Workshop Build',
    joineryDetail: 'Dovetail Drawers & Solid Brass Fluted Pulls'
  },
  {
    id: 'executive-study',
    category: 'study',
    categoryBadge: 'Study & Library',
    title: 'Executive Solid Desks & Library',
    subtitleBadge: 'Executive Study',
    description:
      'Tailored home office suites crafted in solid walnut with dovetail details, sculptural organic-edge work surfaces, and full-height timber library shelving.',
    specs: 'Solid Walnut · Hand-Cut Mortise · Custom Shelving',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDL4RRTbUa2OXLr3lOUvFoUzQbU-JiwiBSlaFN3MeOT-DLMcailQUdygv2oDypkzfi9ryp-S0sAANM1BcVx0-UT2R2Hhy9ISKYCZsGZNbVDhouWZPxUCrXa9KfDrh-65BPvJ6SrgVPYsvb8qt8e9vppuTGn2Xr_Orvs8bDGUpuCp5GEgoUOlhk0VGydwnR6tM6iF6ZhyWaQSnvaSip_2kargAzPyaeIRWCGbbW2sR6q88GbKuYEh3FN',
    imageAlt:
      'Editorial photograph of custom executive solid walnut study desk and library joinery. Sculptural organic-edge solid wood desk with dovetail joinery details, comfortable tailored leather accent chair, built-in floor-to-ceiling solid timber bookshelves.',
    whatsappText:
      'Assalam-o-Alaikum! I am inquiring about Executive Solid Wood Desks & Library Joinery at Spike Wood Furniture.',
    dimensionsRange: '5.5 ft to 8 ft Desks · Custom Bookcase Walls',
    leadTime: '3 – 5 Weeks Workshop Commission',
    joineryDetail: 'Through-Dovetail Carcase & Concealed Wire Channels'
  },
  {
    id: 'sideboards-credenzas',
    category: 'storage',
    categoryBadge: 'Credenzas & Consoles',
    title: 'Sideboards & Fluted Credenzas',
    subtitleBadge: 'Tambour Doors',
    description:
      'Architectural solid teak sideboards and low credenzas with precision fluted sliding tambour doors, integrated cable management, and hand-rubbed wax finish.',
    specs: 'Solid Teak / Walnut · Tambour Joinery · Bronze Pulls',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAHHFYpuag83NyPDqPvYYFUoWDv_9hpHgV8VcsWurFbjRhiGt-8s7NKbQcDNpVZkSbT9PCmihdQuqFh1uvZGarxa9FW1aR2HvrodXUlkboA767pibNdWQzKcO1rtgXamxquiYBNPxHPZYhislZYmxexO0OJ0xj6lfElk1CoXb-d6RHEhXbEYMh8p9p9FcZRk7phyIzTUlp5ZNCaYp7sUQf4T75vNz5aBi43h43a6zUGrAF-QN48p0GH',
    imageAlt:
      'Refined interior vignette of a bespoke solid teak wood sideboard and architectural credenza with fluted tambour sliding doors and minimalist bronze hardware.',
    whatsappText:
      'Assalam-o-Alaikum! I am inquiring about Bespoke Sideboards & Fluted Tambour Credenzas at Spike Wood Furniture.',
    dimensionsRange: '5 ft, 6.5 ft & 8 ft Low-Profile Consoles',
    leadTime: '3 – 4 Weeks Workshop Commission',
    joineryDetail: 'Canvas-Backed Solid Timber Tambour Slats'
  }
];

function ResilientImage({
  src,
  alt,
  className,
  fallbackLabel
}: {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel: string;
}) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#4a3525] via-[#322011] to-[#1C1A17] text-[#fbf9f6] p-6 text-center ${className || ''}`}
      >
        <span className="material-symbols-outlined text-4xl text-[#d69557] mb-2">
          carpenter
        </span>
        <span className="font-serif text-lg tracking-wide text-[#fedcc5]">
          {fallbackLabel}
        </span>
        <span className="text-xs uppercase tracking-[0.12em] text-[#bb9d88] mt-1">
          Spike Wood Furniture • Islamabad
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}

export default function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');
  const [selectedSwatchId, setSelectedSwatchId] = useState<string>('walnut');
  const [selectedItem, setSelectedItem] = useState<CollectionItem | null>(null);

  // Inquiry form state
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [collectionInterest, setCollectionInterest] = useState('General Showroom Inquiry');
  const [customRequirements, setCustomRequirements] = useState('');
  const [preparedWhatsappUrl, setPreparedWhatsappUrl] = useState<string | null>(null);
  const [copiedMessage, setCopiedMessage] = useState(false);

  const filteredCollections =
    activeCategory === 'all'
      ? COLLECTIONS
      : COLLECTIONS.filter((item) => item.category === activeCategory);

  const activeSwatch =
    TIMBER_SWATCHES.find((s) => s.id === selectedSwatchId) || TIMBER_SWATCHES[0];

  const buildInquiryMessage = () => {
    return `Assalam-o-Alaikum! My name is ${clientName.trim() || 'Valued Client'}.
Phone: ${clientPhone.trim() || 'Not provided'}
Interested in: ${collectionInterest}
Preferred Timber: ${activeSwatch.name}
Requirements: ${customRequirements.trim() || 'Showroom consultation & availability inquiry'}`;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const messageText = buildInquiryMessage();
    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/923000506339?text=${encodedMessage}`;
    setPreparedWhatsappUrl(whatsappUrl);
  };

  const handleCopyInquiry = () => {
    navigator.clipboard.writeText(buildInquiryMessage());
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 2500);
  };

  return (
    <div className="bg-background text-on-surface antialiased min-h-screen flex flex-col font-sans text-[15px] leading-[24px]">
      {/* ================= TOP APP BAR ================= */}
      <header className="sticky top-0 z-40 bg-surface/95 backdrop-blur-md border-b border-sand-border">
        <div className="max-w-[1380px] mx-auto px-5 md:px-8 lg:px-16 flex justify-between items-center gap-8 h-20 w-full">
          {/* Zone 1: Brand Logo */}
          <a
            href="#"
            className="font-serif text-[18px] leading-[26px] tracking-[0.08em] text-primary uppercase font-semibold whitespace-nowrap shrink-0"
          >
            SPIKE WOOD FURNITURE
          </a>

          {/* Zone 2: Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase">
            <a
              href="#collections"
              className="text-primary border-b border-primary pb-1 whitespace-nowrap shrink-0"
            >
              Collections
            </a>
            <a
              href="#craftsmanship"
              className="text-on-surface-variant hover:text-primary pb-1 transition-colors duration-200 whitespace-nowrap shrink-0"
            >
              Craftsmanship
            </a>
            <a
              href="#about"
              className="text-on-surface-variant hover:text-primary pb-1 transition-colors duration-200 whitespace-nowrap shrink-0"
            >
              About Showroom
            </a>
            <a
              href="#location"
              className="text-on-surface-variant hover:text-primary pb-1 transition-colors duration-200 whitespace-nowrap shrink-0"
            >
              Visit &amp; Location
            </a>
            <a
              href="#contact"
              className="text-on-surface-variant hover:text-primary pb-1 transition-colors duration-200 whitespace-nowrap shrink-0"
            >
              Inquire
            </a>
          </nav>

          {/* Zone 3: Trailing Action: WhatsApp Concierge */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <a
              href="https://wa.me/923000506339?text=Assalam-o-Alaikum!%20I%20found%20Spike%20Wood%20Furniture%20Showroom%20through%20your%20website.%20I%20would%20like%20to%20inquire%20about%20your%20furniture%20collection."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 border border-sand-border hover:border-walnut-deep bg-surface-warm px-4 py-2.5 rounded text-[14px] leading-[20px] font-medium text-primary hover:text-walnut-deep transition-all duration-200 whitespace-nowrap shrink-0"
            >
              <span className="material-symbols-outlined text-base text-secondary">
                chat
              </span>
              <span>WhatsApp Concierge (+92 300 506339)</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              aria-label="Open navigation drawer"
              onClick={() => setIsDrawerOpen(true)}
              className="p-2 text-primary hover:text-secondary transition-colors"
            >
              <span className="material-symbols-outlined text-2xl">menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* ================= MOBILE DRAWER ================= */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-charcoal-main/50 backdrop-blur-xs z-50 transition-opacity duration-200"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}
      <aside
        className={`fixed inset-y-0 right-0 w-80 max-w-[85vw] z-50 bg-surface-warm border-l border-sand-border shadow-2xl transform transition-transform duration-200 ease-out ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full justify-between p-6">
          <div>
            <div className="flex justify-between items-center pb-4 border-b border-sand-border">
              <div>
                <div className="font-serif text-[18px] leading-[26px] tracking-wider text-primary uppercase font-semibold">
                  SPIKE WOOD FURNITURE
                </div>
                <p className="text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase text-on-surface-variant mt-0.5">
                  Master-Crafted Bespoke Solid Wood • Islamabad
                </p>
              </div>
              <button
                type="button"
                aria-label="Close navigation drawer"
                onClick={() => setIsDrawerOpen(false)}
                className="p-1 text-on-surface-variant hover:text-primary"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <nav className="flex flex-col gap-1.5 mt-6 text-[14px] leading-[20px] font-medium">
              <a
                href="#collections"
                onClick={() => setIsDrawerOpen(false)}
                className="flex items-center gap-3 text-primary font-semibold px-3 py-2.5 rounded bg-sand-border/50"
              >
                <span className="material-symbols-outlined">chair</span>
                <span>Collections</span>
              </a>
              <a
                href="#craftsmanship"
                onClick={() => setIsDrawerOpen(false)}
                className="flex items-center gap-3 text-on-surface-variant hover:text-primary px-3 py-2.5 rounded"
              >
                <span className="material-symbols-outlined">carpenter</span>
                <span>Craftsmanship</span>
              </a>
              <a
                href="#about"
                onClick={() => setIsDrawerOpen(false)}
                className="flex items-center gap-3 text-on-surface-variant hover:text-primary px-3 py-2.5 rounded"
              >
                <span className="material-symbols-outlined">store</span>
                <span>About Showroom</span>
              </a>
              <a
                href="#location"
                onClick={() => setIsDrawerOpen(false)}
                className="flex items-center gap-3 text-on-surface-variant hover:text-primary px-3 py-2.5 rounded"
              >
                <span className="material-symbols-outlined">location_on</span>
                <span>Visit &amp; Location</span>
              </a>
              <a
                href="#contact"
                onClick={() => setIsDrawerOpen(false)}
                className="flex items-center gap-3 text-on-surface-variant hover:text-primary px-3 py-2.5 rounded"
              >
                <span className="material-symbols-outlined">chat</span>
                <span>Inquire</span>
              </a>
            </nav>
          </div>

          <div className="pt-6 border-t border-sand-border flex flex-col gap-3">
            <a
              href="https://wa.me/923000506339?text=Assalam-o-Alaikum!%20I%20would%20like%20to%20consult%20with%20Spike%20Wood%20Furniture%20Showroom%20Islamabad."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-primary-container hover:bg-walnut-deep text-surface px-4 py-3 rounded text-center text-[14px] leading-[20px] font-medium transition-colors"
            >
              Consult via WhatsApp (+92 300 506339)
            </a>
            <div className="flex justify-between items-center text-on-surface-variant text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase px-1">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm">schedule</span>{' '}
                Showroom Hours
              </span>
              <a
                href="#location"
                onClick={() => setIsDrawerOpen(false)}
                className="flex items-center gap-1.5 hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined text-sm">directions</span>{' '}
                Directions
              </a>
            </div>
          </div>
        </div>
      </aside>

      {/* ================= HERO SECTION (Grand, Ultra-Premium Centerpiece) ================= */}
      <section className="relative bg-surface border-b border-sand-border overflow-hidden">
        <div className="max-w-[1380px] mx-auto px-5 md:px-8 lg:px-16 pt-10 pb-16 lg:pt-14 lg:pb-24">
          {/* Editorial Top Intro Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-10 lg:mb-12">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="h-px w-8 bg-secondary" />
                <span className="text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase text-secondary">
                  Islamabad Showroom • Bespoke Joinery &amp; Timber
                </span>
              </div>
              <h1 className="font-serif text-[38px] leading-[46px] md:text-[56px] md:leading-[64px] tracking-[-0.02em] text-primary font-normal [text-wrap:balance]">
                Furniture That Makes a House Feel Like Home
              </h1>
            </div>
            <div className="lg:col-span-4 flex flex-col justify-end">
              <p className="text-[18px] leading-[30px] text-on-surface-variant mb-6">
                Handcrafted solid timber pieces, bespoke joinery, and refined living
                collections designed for timeless Pakistani homes.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#collections"
                  className="bg-primary-container hover:bg-walnut-deep text-surface px-6 py-3.5 rounded text-center text-[14px] leading-[20px] font-medium tracking-wider transition-colors inline-flex items-center gap-2 whitespace-nowrap shrink-0"
                >
                  <span>Explore Our Collections</span>
                  <span className="material-symbols-outlined text-base">
                    arrow_downward
                  </span>
                </a>
                <a
                  href="https://wa.me/923000506339?text=Assalam-o-Alaikum!%20I%20would%20like%20to%20inquire%20about%20furnishing%20options%20at%20Spike%20Wood%20Furniture%20Showroom%20Islamabad."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-sand-muted hover:border-primary text-primary hover:bg-surface-warm px-5 py-3.5 rounded text-center text-[14px] leading-[20px] font-medium transition-colors inline-flex items-center gap-2 whitespace-nowrap shrink-0"
                >
                  <span className="material-symbols-outlined text-base text-secondary">
                    chat
                  </span>
                  <span>Chat on WhatsApp (+92 300 506339)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Grand Centerpiece Editorial Hero Frame */}
          <div className="relative w-full rounded-lg overflow-hidden border border-sand-border bg-surface-warm group">
            <div className="relative w-full h-[380px] sm:h-[480px] md:h-[580px] lg:h-[640px] overflow-hidden">
              <ResilientImage
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZt2TX-GZ8QWJqYdDxiyinyl9761xbwHbVbY3qqn5owd6Y1XbCqtcodlIcqE7iSi0FLJLB6ogdUKi8jZtWrGQaeibS8Ac4XSBNxoTSr9xikSj3ss32n-Iqf9rc_IoGi7_qG15L4CnvILNfpfo76WprCJvm7zkk4vLm_mcrXniiCT_jYpw50tRaSlkEkXBjOZ0WfzVVoRzCeVtqLjKl-_EB8tEGjdeyXcUt2GeVCzivOnhtwYpCoVmR"
                alt="Ultra-luxurious, architectural interior photograph of a grand, airy modern living room showroom in an editorial residence. Center stage features a magnificent handcrafted solid dark walnut dining table and a low-slung bespoke timber coffee table with rich organic grain, accompanied by tailored off-white bouclé and linen lounge chairs."
                fallbackLabel="Curated Living & Dining Vignette"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
              {/* Soft cinematic gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-main/70 via-charcoal-main/15 to-transparent pointer-events-none" />

              {/* Floating Editorial Kicker */}
              <div className="absolute top-5 left-5 md:top-8 md:left-8 bg-surface/95 backdrop-blur-md border border-sand-border px-4 py-2.5 rounded">
                <span className="text-[11px] leading-[16px] tracking-[0.12em] uppercase text-primary font-semibold">
                  Curated Living Vignette · Islamabad Showroom
                </span>
              </div>

              {/* Floating Architectural Details Banner */}
              <div className="absolute bottom-5 left-5 right-5 md:bottom-8 md:left-8 md:right-8 bg-surface/95 backdrop-blur-md border border-sand-border p-4 md:p-6 rounded flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase">
                  <div>
                    <span className="block text-primary mb-0.5">Timber Species</span>
                    <span className="text-on-surface-variant font-normal">
                      American Walnut &amp; Teak
                    </span>
                  </div>
                  <div className="sm:border-l border-sand-border sm:pl-6">
                    <span className="block text-primary mb-0.5">Artisan Joinery</span>
                    <span className="text-on-surface-variant font-normal">
                      Hand-Cut Mortise &amp; Dovetail
                    </span>
                  </div>
                  <div className="sm:border-l border-sand-border sm:pl-6">
                    <span className="block text-primary mb-0.5">
                      Showroom Presence
                    </span>
                    <span className="text-on-surface-variant font-normal">
                      Islamabad Federal Capital
                    </span>
                  </div>
                </div>
                <div className="hidden lg:flex items-center gap-3 shrink-0">
                  <a
                    href="https://wa.me/923000506339?text=Assalam-o-Alaikum!%20I%20would%20like%20to%20schedule%20a%20viewing%20for%20the%20signature%20living%20room%20suite%20shown%20on%20your%20website."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary-container text-surface hover:bg-walnut-deep px-4 py-2.5 rounded text-[14px] leading-[20px] font-medium transition-colors whitespace-nowrap shrink-0"
                  >
                    <span className="material-symbols-outlined text-sm">
                      calendar_month
                    </span>
                    <span>Schedule Private Viewing</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= COLLECTIONS SECTION (#collections) ================= */}
      <section
        id="collections"
        className="py-20 lg:py-28 bg-background border-b border-sand-border"
      >
        <div className="max-w-[1380px] mx-auto px-5 md:px-8 lg:px-16">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase text-secondary block mb-2">
                Artisanal Gallery
              </span>
              <h2 className="font-serif text-[30px] leading-[38px] md:text-[40px] md:leading-[48px] tracking-[-0.015em] font-medium text-primary">
                Curated Furniture Collections
              </h2>
              <p className="text-[15px] leading-[24px] text-on-surface-variant mt-2 max-w-xl">
                Six distinct master-crafted categories tailored for discerning
                residences across Islamabad and Rawalpindi.
              </p>
            </div>

            {/* Interactive Filter Tabs */}
            <div className="flex flex-wrap gap-2 text-[14px] leading-[20px] font-medium">
              {[
                { id: 'all', label: 'All Pieces' },
                { id: 'living', label: 'Living' },
                { id: 'dining', label: 'Dining' },
                { id: 'bedroom', label: 'Bedroom' },
                { id: 'storage', label: 'Storage & Consoles' },
                { id: 'study', label: 'Study & Library' }
              ].map((tab) => {
                const isActive = activeCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveCategory(tab.id as CategoryId)}
                    className={`px-4 py-2 rounded transition-all whitespace-nowrap shrink-0 ${
                      isActive
                        ? 'bg-primary-container text-surface'
                        : 'bg-surface-warm text-on-surface-variant hover:text-primary border border-sand-border'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 6 Curated Editorial Collections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCollections.map((item) => (
              <article
                key={item.id}
                className="group bg-surface-warm border border-sand-border rounded overflow-hidden flex flex-col justify-between transition-transform duration-200 hover:-translate-y-0.5"
              >
                <div className="relative overflow-hidden aspect-[4/3] bg-surface-container">
                  <ResilientImage
                    src={item.imageUrl}
                    alt={item.imageAlt}
                    fallbackLabel={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute top-4 left-4 bg-surface/95 backdrop-blur-xs px-3 py-1 rounded border border-sand-border text-[11px] leading-[16px] tracking-[0.12em] text-secondary uppercase font-semibold">
                    {item.categoryBadge}
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex justify-between items-baseline mb-2 gap-2">
                      <h3 className="font-serif text-[22px] leading-[30px] font-semibold text-primary">
                        {item.title}
                      </h3>
                      <span className="text-[11px] leading-[16px] tracking-[0.12em] font-semibold text-on-surface-variant uppercase shrink-0">
                        {item.subtitleBadge}
                      </span>
                    </div>
                    <p className="text-[15px] leading-[24px] text-on-surface-variant mb-6">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-sand-border flex flex-col gap-3">
                    <span className="text-[11px] leading-[16px] tracking-[0.12em] font-semibold text-on-surface-variant uppercase">
                      {item.specs}
                    </span>
                    <div className="flex items-center justify-between gap-4 pt-1">
                      <a
                        href={`https://wa.me/923000506339?text=${encodeURIComponent(
                          item.whatsappText
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[14px] leading-[20px] text-primary hover:text-secondary transition-colors font-medium group/link whitespace-nowrap"
                      >
                        <span>Ask About This Collection</span>
                        <span className="material-symbols-outlined text-base transition-transform group-hover/link:translate-x-1">
                          arrow_forward
                        </span>
                      </a>
                      <button
                        type="button"
                        onClick={() => setSelectedItem(item)}
                        className="text-[12px] leading-[16px] font-medium text-secondary hover:text-primary underline underline-offset-4 whitespace-nowrap shrink-0"
                      >
                        Specs &amp; Dimensions
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Interactive Material & Finish Comparison Strip (from DESIGN.md) */}
          <div className="mt-12 p-6 md:p-8 rounded bg-surface-warm border border-sand-border">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5">
                <span className="text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase text-secondary block mb-1.5">
                  Material Comparison Bar
                </span>
                <h3 className="font-serif text-[22px] leading-[30px] font-semibold text-primary mb-2">
                  Select Seasoned Hardwood Finish
                </h3>
                <p className="text-[13px] leading-[20px] text-on-surface-variant">
                  Compare our four foundational kiln-dried timber finishes available
                  across all bespoke commissions.
                </p>
              </div>

              <div className="lg:col-span-7 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  {TIMBER_SWATCHES.map((swatch) => {
                    const isSelected = swatch.id === selectedSwatchId;
                    return (
                      <button
                        key={swatch.id}
                        type="button"
                        onClick={() => setSelectedSwatchId(swatch.id)}
                        title={swatch.name}
                        className={`group flex flex-col items-center gap-1.5 focus:outline-none`}
                      >
                        <span
                          className={`w-9 h-9 rounded-full transition-all border ${
                            isSelected
                              ? 'ring-2 ring-offset-2 ring-[#4A3525] border-[#4A3525] scale-105'
                              : 'border-[#E8E2D8] hover:scale-105'
                          }`}
                          style={{
                            background: `radial-gradient(circle at 30% 30%, ${swatch.grainHighlight}, ${swatch.toneHex})`
                          }}
                        />
                        <span
                          className={`text-[11px] leading-[16px] font-medium whitespace-nowrap ${
                            isSelected ? 'text-primary font-semibold' : 'text-on-surface-variant'
                          }`}
                        >
                          {swatch.name.split(' ')[0]}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="flex-1 bg-surface p-4 rounded border border-sand-border">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <span className="font-serif text-[16px] font-semibold text-primary">
                      {activeSwatch.name}
                    </span>
                    <span className="text-[11px] leading-[16px] tracking-[0.12em] uppercase text-secondary font-semibold tabular-nums">
                      {activeSwatch.moistureLevel}
                    </span>
                  </div>
                  <p className="text-[13px] leading-[20px] text-on-surface-variant">
                    {activeSwatch.notes}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Editorial Notice Banner */}
          <div className="mt-8 p-6 rounded bg-surface border border-sand-border flex items-start gap-4">
            <span className="material-symbols-outlined text-secondary text-2xl shrink-0 mt-0.5">
              info
            </span>
            <p className="text-[13px] leading-[20px] text-on-surface-variant">
              <strong className="text-primary font-medium">Showroom Notice:</strong>{' '}
              Illustrative showroom collections. Because wood grain and custom
              dimensions vary per commission, we invite you to inquire directly on
              WhatsApp or visit our Islamabad showroom for current floor inventory
              and made-to-order inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CRAFTSMANSHIP & WORKSHOP VIGNETTE SECTION (#craftsmanship) ================= */}
      <section
        id="craftsmanship"
        className="py-20 lg:py-28 bg-surface-warm border-b border-sand-border"
      >
        <div className="max-w-[1380px] mx-auto px-5 md:px-8 lg:px-16">
          {/* Split Editorial Presentation */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
            {/* Craftsmanship Visual Frame with Dovetail Detail (6 cols) */}
            <div className="lg:col-span-6">
              <div className="relative bg-surface p-2 border border-sand-border rounded">
                <div className="aspect-[4/3] rounded overflow-hidden bg-surface-container">
                  <ResilientImage
                    src="https://lh3.googleusercontent.com/aida/AEtjO1U1_g-XjBwDDjNO0CYv4rESEKGv7IIt_ybs6v5qsXUMPkK3MUaJphvnURQvmDA5otLmMRDrwDTHkg8IVwNFHt8a0xMvjZNxUHG5aUkVltaH2WHHOIj6yXswdbRP1m2gTWngRU2meRYKuBJWU3NbQqBm151VQl4L6idatJhkKBhBuTCpirgkFtNxu0DS8kPJ8tvpZnpkZD7-uUvfqpWUiEuO0JTCaKpigXbwa3FetUxIhl8VyCwqhfnR8lQ"
                    alt="Close-up detail shot of master woodworker's hands delicately inspecting hand-carved dovetail joints and rich polished grain on a solid walnut console table, warm natural workshop light, artisanal craft."
                    fallbackLabel="Hand-Cut Dovetail & Mortise Joinery"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Specifications Strip */}
                <div className="grid grid-cols-3 gap-2 mt-2 pt-2 border-t border-sand-border text-center text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase">
                  <div className="p-2 bg-surface-warm rounded text-primary">
                    Kiln-Dried Hardwood
                  </div>
                  <div className="p-2 bg-surface-warm rounded text-primary">
                    Hand-Cut Dovetail
                  </div>
                  <div className="p-2 bg-surface-warm rounded text-primary">
                    Organic Matte Wax
                  </div>
                </div>
              </div>
            </div>

            {/* Craftsmanship Editorial Content (6 cols) */}
            <div className="lg:col-span-6">
              <span className="text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase text-secondary block mb-2">
                Artisan Heritage
              </span>
              <h2 className="font-serif text-[30px] leading-[38px] md:text-[40px] md:leading-[48px] tracking-[-0.015em] font-medium text-primary mb-6">
                Honest Joinery &amp; Genuine Timber
              </h2>
              <p className="text-[18px] leading-[30px] text-on-surface-variant mb-6">
                At Spike Wood Furniture, we honor the permanence of authentic
                hardwood. Every credenza, dining table, and bed frame is built with
                time-tested joinery methods that adapt gracefully to Pakistan&apos;s
                seasonal shifts.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <span className="w-6 h-6 rounded-full bg-sand-border/70 flex items-center justify-center shrink-0 mt-0.5 text-primary">
                    <span className="material-symbols-outlined text-sm">check</span>
                  </span>
                  <div>
                    <h4 className="text-[15px] leading-[24px] font-semibold text-primary">
                      Kiln-Dried Seasoned Hardwoods
                    </h4>
                    <p className="text-[13px] leading-[20px] text-on-surface-variant">
                      We source responsibly selected walnut, teak, and sheesham
                      conditioned to resist warping and seasonal swelling.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="w-6 h-6 rounded-full bg-sand-border/70 flex items-center justify-center shrink-0 mt-0.5 text-primary">
                    <span className="material-symbols-outlined text-sm">check</span>
                  </span>
                  <div>
                    <h4 className="text-[15px] leading-[24px] font-semibold text-primary">
                      Hand-Cut Dovetail &amp; Blind Mortises
                    </h4>
                    <p className="text-[13px] leading-[20px] text-on-surface-variant">
                      No synthetic staples or hidden fasteners. Joints are
                      physically interlocked for multi-generational durability.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="w-6 h-6 rounded-full bg-sand-border/70 flex items-center justify-center shrink-0 mt-0.5 text-primary">
                    <span className="material-symbols-outlined text-sm">check</span>
                  </span>
                  <div>
                    <h4 className="text-[15px] leading-[24px] font-semibold text-primary">
                      Tactile Matte Oil &amp; Wax Finishes
                    </h4>
                    <p className="text-[13px] leading-[20px] text-on-surface-variant">
                      Micro-porous finishes let the timber breathe while preserving
                      the natural tactile depth of raw grain.
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/923000506339?text=Assalam-o-Alaikum!%20I%20would%20like%20to%20learn%20more%20about%20timber%20species%20and%20joinery%20options%20at%20Spike%20Wood."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-primary text-primary hover:bg-surface px-5 py-2.5 rounded text-[14px] leading-[20px] font-medium transition-colors whitespace-nowrap"
              >
                <span>Inquire About Custom Joinery</span>
                <span className="material-symbols-outlined text-base">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>

          {/* Showroom Living Room Vignette Frame */}
          <div className="mt-8 bg-surface border border-sand-border rounded-lg p-4 md:p-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 overflow-hidden rounded aspect-[16/9] bg-surface-container">
                <ResilientImage
                  src="https://lh3.googleusercontent.com/aida/AEtjO1VqO3sJTMAApM70y4DAQ7G-9LzTnZ5jSKKmjymw0l9qFUS_rQiX1XlvTHmpWo7Gma_r-Froc-46krNlclXCIAvt7ML3prVlXP1FIWAW3l2DPXoopdbss700TV5A1kiTYHXi6iJhc_UGqSSYL9kmOsqx3UjhRMwBffZRVuF4tpZ_YjcPtR1qY-anBp1ZsQrUk0aMD5wMKP_rFbwN68d7-BEd_3d6ne8Yckakd7EPT7lDbv2vskCQXrga8ic"
                  alt="Editorial architectural interior photography of a luxurious, serene living room featuring custom handcrafted solid walnut wood furniture. Low-profile walnut coffee table, bespoke credenza, warm ivory linen sofa."
                  fallbackLabel="Showroom Living Room Vignette"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="lg:col-span-4 flex flex-col justify-between py-2">
                <div>
                  <span className="text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase text-secondary block mb-2">
                    Showroom Vignette
                  </span>
                  <h3 className="font-serif text-[22px] leading-[30px] font-semibold text-primary mb-3">
                    Living Room Harmony
                  </h3>
                  <p className="text-[15px] leading-[24px] text-on-surface-variant mb-6">
                    Witness how custom solid walnut credenzas and low-profile coffee
                    tables anchor an expansive architectural interior with warmth and
                    balance.
                  </p>
                </div>
                <div className="p-4 bg-surface-warm rounded border border-sand-border">
                  <p className="text-[13px] leading-[20px] text-primary font-medium mb-1">
                    Custom Dimensions Available
                  </p>
                  <p className="text-[13px] leading-[20px] text-on-surface-variant">
                    Tailored lengths from 5 ft to 12 ft to accommodate any room
                    scale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT SHOWROOM SECTION (#about) ================= */}
      <section
        id="about"
        className="py-20 lg:py-28 bg-surface border-b border-sand-border"
      >
        <div className="max-w-[1380px] mx-auto px-5 md:px-8 lg:px-16">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase text-secondary block mb-2">
              Our Federal Capital Presence
            </span>
            <h2 className="font-serif text-[30px] leading-[38px] md:text-[40px] md:leading-[48px] tracking-[-0.015em] font-medium text-primary mb-6">
              A Grounded Space for Interior Exploration
            </h2>
            <p className="text-[18px] leading-[30px] text-on-surface-variant">
              Spike Wood Furniture Showroom serves homeowners, architects, and
              interior decorators across Islamabad and Rawalpindi. Located in the
              federal capital, providing transparent consultations and hands-on
              material previews in person or directly via WhatsApp.
            </p>
          </div>

          {/* Why Visit Spike Wood - 3 Unexaggerated Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="why-visit">
            <div className="p-8 rounded bg-surface-warm border border-sand-border flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded bg-sand-border/60 flex items-center justify-center text-primary mb-6">
                  <span className="material-symbols-outlined text-2xl">
                    visibility
                  </span>
                </div>
                <h3 className="font-serif text-[22px] leading-[30px] font-semibold text-primary mb-3">
                  Inspect Wood &amp; Finishes in Person
                </h3>
                <p className="text-[15px] leading-[24px] text-on-surface-variant">
                  Evaluate grain patterns, timber heft, and natural finishes under
                  genuine ambient lighting. Touch live-edge slabs and explore timber
                  samples before placing commissions.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-sand-border text-[11px] leading-[16px] tracking-[0.12em] font-semibold text-secondary uppercase">
                Tactile Inspection
              </div>
            </div>

            <div className="p-8 rounded bg-surface-warm border border-sand-border flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded bg-sand-border/60 flex items-center justify-center text-primary mb-6">
                  <span className="material-symbols-outlined text-2xl">
                    straighten
                  </span>
                </div>
                <h3 className="font-serif text-[22px] leading-[30px] font-semibold text-primary mb-3">
                  Bespoke Dimensions for Your Layout
                </h3>
                <p className="text-[15px] leading-[24px] text-on-surface-variant">
                  Discuss architectural floor plans, ceiling clearance, and tailored
                  specifications directly with experienced carpenters who understand
                  room ergonomics.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-sand-border text-[11px] leading-[16px] tracking-[0.12em] font-semibold text-secondary uppercase">
                Tailored Proportions
              </div>
            </div>

            <div className="p-8 rounded bg-surface-warm border border-sand-border flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded bg-sand-border/60 flex items-center justify-center text-primary mb-6">
                  <span className="material-symbols-outlined text-2xl">chat</span>
                </div>
                <h3 className="font-serif text-[22px] leading-[30px] font-semibold text-primary mb-3">
                  Direct WhatsApp Ordering &amp; Support
                </h3>
                <p className="text-[15px] leading-[24px] text-on-surface-variant">
                  Quick inquiries, video walkthroughs of current floor inventory, and
                  real-time production updates sent directly via WhatsApp at +92 300
                  506339.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-sand-border text-[11px] leading-[16px] tracking-[0.12em] font-semibold text-secondary uppercase">
                Verified Support
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LOCATION & SHOWROOM DETAILS (#location) ================= */}
      <section
        id="location"
        className="py-20 lg:py-28 bg-surface-warm border-b border-sand-border"
      >
        <div className="max-w-[1380px] mx-auto px-5 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Location Details (5 cols) */}
            <div className="lg:col-span-5">
              <span className="text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase text-secondary block mb-2">
                Showroom Visit
              </span>
              <h2 className="font-serif text-[30px] leading-[38px] md:text-[40px] md:leading-[48px] tracking-[-0.015em] font-medium text-primary mb-6">
                Visit Our Islamabad Showroom
              </h2>
              <p className="text-[15px] leading-[24px] text-on-surface-variant mb-8">
                Experience our furniture collections first-hand. Our showroom is
                easily accessible for patrons traveling from across Islamabad and
                Rawalpindi.
              </p>

              <div className="space-y-4 mb-8">
                <div className="p-5 bg-surface rounded border border-sand-border flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary text-2xl shrink-0 mt-0.5">
                    location_on
                  </span>
                  <div>
                    <span className="text-[11px] leading-[16px] tracking-[0.12em] font-semibold text-on-surface-variant uppercase block mb-1">
                      Showroom Address
                    </span>
                    <p className="text-[15px] leading-[24px] text-primary font-medium">
                      Islamabad, Federal Capital Territory, Pakistan
                    </p>
                    <a
                      href="https://www.cybo.com/PK-biz/spike-wood-furniture-showroom"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] leading-[20px] text-secondary hover:underline inline-flex items-center gap-1 mt-1"
                    >
                      <span>View Verified Cybo Business Listing</span>
                      <span className="material-symbols-outlined text-xs">
                        open_in_new
                      </span>
                    </a>
                  </div>
                </div>

                <div className="p-5 bg-surface rounded border border-sand-border flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary text-2xl shrink-0 mt-0.5">
                    schedule
                  </span>
                  <div>
                    <span className="text-[11px] leading-[16px] tracking-[0.12em] font-semibold text-on-surface-variant uppercase block mb-1">
                      Opening Hours
                    </span>
                    <p className="text-[15px] leading-[24px] text-primary font-medium tabular-nums">
                      Mon – Sat: 10:00 AM – 9:00 PM
                    </p>
                    <p className="text-[15px] leading-[24px] text-on-surface-variant tabular-nums">
                      Sunday: 2:00 PM – 8:00 PM
                    </p>
                  </div>
                </div>

                <div className="p-5 bg-surface rounded border border-sand-border flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary text-2xl shrink-0 mt-0.5">
                    phone_in_talk
                  </span>
                  <div>
                    <span className="text-[11px] leading-[16px] tracking-[0.12em] font-semibold text-on-surface-variant uppercase block mb-1">
                      Direct Contacts
                    </span>
                    <p className="text-[15px] leading-[24px] text-primary font-medium tabular-nums">
                      Phone &amp; WhatsApp: +92 300 506339
                    </p>
                    <p className="text-[13px] leading-[20px] text-on-surface-variant">
                      Walk-ins welcome during showroom hours.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://maps.google.com/?q=Spike+Wood+Furniture+Showroom+Islamabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-container hover:bg-walnut-deep text-surface px-5 py-3 rounded text-center text-[14px] leading-[20px] font-medium transition-colors inline-flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-lg">
                    directions
                  </span>
                  <span>Open in Google Maps / Get Directions</span>
                </a>
              </div>
            </div>

            {/* Interactive Map Card (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-surface rounded border border-sand-border p-2">
                <div className="relative w-full h-[460px] rounded overflow-hidden bg-surface-container flex flex-col justify-between p-6">
                  <div
                    className="absolute inset-0 opacity-80 pointer-events-none"
                    style={{
                      backgroundImage:
                        'radial-gradient(#D8CEBE 1px, transparent 1px)',
                      backgroundSize: '20px 20px'
                    }}
                  />

                  <div className="relative z-10 bg-surface/95 backdrop-blur-sm border border-sand-border px-4 py-3 rounded max-w-sm">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="material-symbols-outlined text-base text-secondary">
                        location_on
                      </span>
                      <span className="text-[11px] leading-[16px] tracking-[0.12em] uppercase text-primary font-semibold">
                        Spike Wood Showroom
                      </span>
                    </div>
                    <p className="text-[13px] leading-[20px] text-on-surface-variant">
                      Islamabad Capital Territory, Pakistan
                    </p>
                  </div>

                  <div className="relative z-10 flex flex-col items-center justify-center my-auto">
                    <div className="w-14 h-14 rounded-full bg-primary-container text-surface flex items-center justify-center shadow-lg border-2 border-surface">
                      <span className="material-symbols-outlined text-2xl">
                        store
                      </span>
                    </div>
                    <div className="mt-2 bg-charcoal-main text-surface px-3 py-1 rounded text-xs font-medium tracking-wide">
                      Spike Wood Furniture Showroom
                    </div>
                  </div>

                  <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 bg-surface/95 backdrop-blur-sm border border-sand-border p-3 rounded">
                    <span className="text-[13px] leading-[20px] text-on-surface-variant">
                      Need route assistance from Rawalpindi or Islamabad Expressway?
                    </span>
                    <a
                      href="https://wa.me/923000506339?text=Assalam-o-Alaikum!%20Could%20you%20please%20share%20your%20exact%20live%20showroom%20location%20pin?"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[14px] leading-[20px] text-primary font-semibold hover:text-secondary inline-flex items-center gap-1"
                    >
                      <span>Send Location on WhatsApp</span>
                      <span className="material-symbols-outlined text-sm">
                        near_me
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CLIENT INQUIRY FORM SECTION (#contact) ================= */}
      <section
        id="contact"
        className="py-20 lg:py-28 bg-surface border-b border-sand-border"
      >
        <div className="max-w-[1380px] mx-auto px-5 md:px-8 lg:px-16">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase text-secondary block mb-2">
                Bespoke Inquiry
              </span>
              <h2 className="font-serif text-[30px] leading-[38px] md:text-[40px] md:leading-[48px] tracking-[-0.015em] font-medium text-primary mb-4">
                Request an Estimate or Showroom Appointment
              </h2>
              <p className="text-[15px] leading-[24px] text-on-surface-variant">
                Tell us about your room layout or chosen pieces. Submitting this
                form prepares your specifications for our verified WhatsApp
                concierge.
              </p>
            </div>

            <form
              onSubmit={handleFormSubmit}
              className="bg-surface-warm p-8 md:p-10 rounded border border-sand-border space-y-6"
            >
              <div>
                <label
                  htmlFor="client-name"
                  className="block text-[14px] leading-[20px] font-medium text-primary mb-2"
                >
                  Full Name
                </label>
                <input
                  id="client-name"
                  type="text"
                  required
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="e.g. Tariq Malik"
                  className="w-full bg-surface border border-sand-muted focus:border-walnut-deep rounded px-4 py-3 text-on-surface text-[15px] leading-[24px] focus:outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="client-phone"
                    className="block text-[14px] leading-[20px] font-medium text-primary mb-2"
                  >
                    Phone / WhatsApp Number
                  </label>
                  <input
                    id="client-phone"
                    type="tel"
                    required
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    placeholder="e.g. +92 300 1234567"
                    className="w-full bg-surface border border-sand-muted focus:border-walnut-deep rounded px-4 py-3 text-on-surface text-[15px] leading-[24px] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="collection-interest"
                    className="block text-[14px] leading-[20px] font-medium text-primary mb-2"
                  >
                    Collection of Interest
                  </label>
                  <select
                    id="collection-interest"
                    value={collectionInterest}
                    onChange={(e) => setCollectionInterest(e.target.value)}
                    className="w-full bg-surface border border-sand-muted focus:border-walnut-deep rounded px-4 py-3 text-on-surface text-[15px] leading-[24px] focus:outline-none transition-colors"
                  >
                    <option value="General Showroom Inquiry">
                      General Showroom Inquiry
                    </option>
                    <option value="Walnut Lounge & Accent Seating">
                      Walnut Lounge &amp; Accent Seating
                    </option>
                    <option value="Live-Edge Dining Suites">
                      Live-Edge Dining Suites
                    </option>
                    <option value="Artisanal Platform Bed Suites">
                      Artisanal Platform Bed Suites
                    </option>
                    <option value="Bespoke Storage & Architectural Wardrobes">
                      Bespoke Storage &amp; Architectural Wardrobes
                    </option>
                    <option value="Executive Solid Wood Desks & Library Joinery">
                      Executive Solid Wood Desks &amp; Library Joinery
                    </option>
                    <option value="Bespoke Sideboards & Fluted Tambour Credenzas">
                      Bespoke Sideboards &amp; Fluted Tambour Credenzas
                    </option>
                    <option value="Full Residence Furniture Package">
                      Full Residence Furniture Package
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="custom-requirements"
                  className="block text-[14px] leading-[20px] font-medium text-primary mb-2"
                >
                  Custom Dimensions or Specific Requirements
                </label>
                <textarea
                  id="custom-requirements"
                  rows={4}
                  value={customRequirements}
                  onChange={(e) => setCustomRequirements(e.target.value)}
                  placeholder="Mention room size, preferred timber (Walnut, Sheesham, Teak), or specific design inspirations..."
                  className="w-full bg-surface border border-sand-muted focus:border-walnut-deep rounded px-4 py-3 text-on-surface text-[15px] leading-[24px] focus:outline-none transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-container hover:bg-walnut-deep text-surface py-3.5 px-6 rounded text-[14px] leading-[20px] font-medium tracking-wider transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-base text-whatsapp-consult">
                  chat
                </span>
                <span>Prepare Inquiry for WhatsApp (+92 300 506339)</span>
              </button>

              {preparedWhatsappUrl && (
                <div className="p-4 bg-surface border border-sand-border rounded space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase text-secondary">
                      Specification Ready for Concierge
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyInquiry}
                      className="text-xs font-medium text-primary hover:text-secondary underline"
                    >
                      {copiedMessage ? 'Copied to Clipboard!' : 'Copy Message Text'}
                    </button>
                  </div>
                  <p className="text-xs text-on-surface-variant whitespace-pre-line bg-surface-warm p-3 rounded border border-sand-border">
                    {buildInquiryMessage()}
                  </p>
                  <a
                    href={preparedWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-walnut-deep hover:bg-primary text-surface py-3 px-4 rounded text-center text-[14px] leading-[20px] font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Launch WhatsApp Chat Now</span>
                    <span className="material-symbols-outlined text-sm">
                      open_in_new
                    </span>
                  </a>
                </div>
              )}

              <p className="text-[11px] leading-[16px] tracking-[0.12em] font-semibold text-center text-on-surface-variant uppercase">
                Instant direct connection with Spike Wood Furniture artisan
                workshop.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ================= COLLECTION SPECIFICATION MODAL ================= */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-charcoal-main/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-surface border border-sand-border rounded max-w-xl w-full p-6 md:p-8 space-y-5 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-sand-border pb-4">
              <div>
                <span className="text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase text-secondary block mb-1">
                  {selectedItem.categoryBadge} · {selectedItem.subtitleBadge}
                </span>
                <h3 className="font-serif text-[26px] leading-[34px] font-semibold text-primary">
                  {selectedItem.title}
                </h3>
              </div>
              <button
                type="button"
                aria-label="Close modal"
                onClick={() => setSelectedItem(null)}
                className="p-1 text-on-surface-variant hover:text-primary"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <p className="text-[15px] leading-[24px] text-on-surface-variant">
              {selectedItem.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[13px] leading-[20px]">
              <div className="p-3.5 bg-surface-warm rounded border border-sand-border">
                <span className="text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase text-on-surface-variant block mb-1">
                  Standard &amp; Custom Scale
                </span>
                <span className="text-primary font-medium">
                  {selectedItem.dimensionsRange}
                </span>
              </div>
              <div className="p-3.5 bg-surface-warm rounded border border-sand-border">
                <span className="text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase text-on-surface-variant block mb-1">
                  Joinery Architecture
                </span>
                <span className="text-primary font-medium">
                  {selectedItem.joineryDetail}
                </span>
              </div>
              <div className="p-3.5 bg-surface-warm rounded border border-sand-border">
                <span className="text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase text-on-surface-variant block mb-1">
                  Selected Timber Finish
                </span>
                <span className="text-primary font-medium">
                  {activeSwatch.name}
                </span>
              </div>
              <div className="p-3.5 bg-surface-warm rounded border border-sand-border">
                <span className="text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase text-on-surface-variant block mb-1">
                  Estimated Lead Time
                </span>
                <span className="text-primary font-medium tabular-nums">
                  {selectedItem.leadTime}
                </span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => {
                  setCollectionInterest(selectedItem.title);
                  setSelectedItem(null);
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-4 py-2.5 rounded border border-primary text-primary hover:bg-surface-warm text-[14px] leading-[20px] font-medium transition-colors"
              >
                Customize in Inquiry Form
              </button>
              <a
                href={`https://wa.me/923000506339?text=${encodeURIComponent(
                  `${selectedItem.whatsappText} (Preferred finish: ${activeSwatch.name})`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded bg-primary-container hover:bg-walnut-deep text-surface text-[14px] leading-[20px] font-medium transition-colors inline-flex items-center gap-2"
              >
                <span>Inquire on WhatsApp</span>
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ================= FLOATING ACTION BUTTON ================= */}
      <div className="fixed bottom-6 right-6 z-40 group">
        <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block whitespace-nowrap bg-charcoal-main text-surface px-3 py-1.5 rounded text-xs font-medium shadow-lg">
          Chat on WhatsApp: +92 300 506339
        </div>
        <a
          aria-label="Chat on WhatsApp"
          href="https://wa.me/923000506339?text=Assalam-o-Alaikum!%20I%20am%20browsing%20your%20website%20and%20would%20like%20to%20connect%20with%20the%20Spike%20Wood%20concierge."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-surface rounded-full border border-sand-border shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200 text-whatsapp-consult"
        >
          <span className="material-symbols-outlined material-symbols-filled text-3xl">
            chat
          </span>
        </a>
      </div>

      {/* ================= EDITORIAL FOOTER ================= */}
      <footer className="w-full bg-surface-warm border-t border-sand-border">
        <div className="max-w-[1380px] mx-auto px-5 md:px-8 lg:px-16 py-16 w-full flex flex-col gap-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="space-y-4">
              <div className="font-serif text-[22px] leading-[30px] tracking-widest text-primary uppercase font-semibold">
                SPIKE WOOD FURNITURE
              </div>
              <p className="text-[13px] leading-[20px] text-on-surface-variant">
                Master-crafted solid hardwood joinery, architectural statement
                tables, and tailored residential cabinetry created for
                Pakistan&apos;s finest homes.
              </p>
              <div className="text-[11px] leading-[16px] tracking-[0.12em] font-semibold text-secondary uppercase">
                Islamabad Showroom • Federal Capital
              </div>
            </div>

            <div>
              <h4 className="text-[11px] leading-[16px] tracking-[0.12em] text-primary uppercase font-semibold mb-4">
                Showroom Collections
              </h4>
              <ul className="space-y-2.5 text-[13px] leading-[20px] text-on-surface-variant">
                <li>
                  <a
                    href="#collections"
                    onClick={() => setActiveCategory('living')}
                    className="hover:text-primary transition-colors"
                  >
                    Living Room Suites
                  </a>
                </li>
                <li>
                  <a
                    href="#collections"
                    onClick={() => setActiveCategory('dining')}
                    className="hover:text-primary transition-colors"
                  >
                    Live-Edge Dining
                  </a>
                </li>
                <li>
                  <a
                    href="#collections"
                    onClick={() => setActiveCategory('bedroom')}
                    className="hover:text-primary transition-colors"
                  >
                    Bedroom Platform Suites
                  </a>
                </li>
                <li>
                  <a
                    href="#collections"
                    onClick={() => setActiveCategory('storage')}
                    className="hover:text-primary transition-colors"
                  >
                    Architectural Wardrobes
                  </a>
                </li>
                <li>
                  <a
                    href="#collections"
                    onClick={() => setActiveCategory('study')}
                    className="hover:text-primary transition-colors"
                  >
                    Study Desks &amp; Libraries
                  </a>
                </li>
                <li>
                  <a
                    href="#collections"
                    onClick={() => setActiveCategory('storage')}
                    className="hover:text-primary transition-colors"
                  >
                    Fluted Tambour Credenzas
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] leading-[16px] tracking-[0.12em] text-primary uppercase font-semibold mb-4">
                Standards &amp; Materials
              </h4>
              <ul className="space-y-2.5 text-[13px] leading-[20px] text-on-surface-variant">
                <li>
                  <a
                    href="#craftsmanship"
                    className="hover:text-primary transition-colors"
                  >
                    Artisan Joinery Standards
                  </a>
                </li>
                <li>
                  <a
                    href="#craftsmanship"
                    className="hover:text-primary transition-colors"
                  >
                    Timber Sourcing
                  </a>
                </li>
                <li>
                  <a
                    href="#location"
                    className="hover:text-primary transition-colors"
                  >
                    Islamabad Showroom Locator
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-primary transition-colors"
                  >
                    WhatsApp Concierge Inquiry
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-primary transition-colors"
                  >
                    Privacy &amp; Bespoke Commission Terms
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] leading-[16px] tracking-[0.12em] text-primary uppercase font-semibold mb-4">
                Direct Contact
              </h4>
              <p className="text-[13px] leading-[20px] text-on-surface-variant mb-2">
                Islamabad, Federal Capital Territory, Pakistan
              </p>
              <p className="text-[13px] leading-[20px] text-primary font-medium mb-4 tabular-nums">
                WhatsApp: +92 300 506339
              </p>
              <a
                href="https://wa.me/923000506339"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary border border-sand-border px-3.5 py-2 rounded text-[14px] leading-[20px] font-medium hover:bg-surface transition-colors tabular-nums"
              >
                <span className="material-symbols-outlined text-base text-secondary">
                  chat
                </span>
                <span>+92 300 506339</span>
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-sand-border flex flex-col md:flex-row justify-between items-center gap-4 text-on-surface-variant text-[13px] leading-[20px]">
            <div>
              © 2025 Spike Wood Furniture. Bespoke Solid Hardwood Joinery.
              Islamabad, Pakistan.
            </div>
            <div className="flex items-center gap-6 text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase">
              <a href="#location" className="hover:text-primary transition-colors">
                Showroom
              </a>
              <a
                href="#craftsmanship"
                className="hover:text-primary transition-colors"
              >
                Joinery
              </a>
              <a
                href="https://wa.me/923000506339"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

