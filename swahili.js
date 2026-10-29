'use strict';

/* AI-prepared translation, vocabulary checked 2026-10-29.
 * Not certified or reviewed by a native-speaking medical translator.
 * Sources:
 * http://www.food-info.net/allergy/en-sw.pdf
 * https://swahili-dictionary.com/english-swahili/peanut_peanut
 * https://swahili-dictionary.com/english-swahili/almond_almond
 * https://swahili-dictionary.com/english-swahili/sesame_sesame
 * https://swahili-land.blogspot.com/2011/05/aina-za-majozi-types-of-nuts.html
 * Keep English identifiers where local terminology is uncertain.
 * Do not use "tende" for pine nuts: the older allergy dictionary also
 * uses that word for dates. Use a descriptive name with English instead.
 */
translations.sw = {
  label: 'Lugha',
  eyebrow: 'Mzio wa chakula · Tafadhali soma',
  title: 'Mzio wa karanga na kokwa za miti',
  intro: 'Nina mzio wa karanga (njugu) na kokwa za miti, kama korosho na lozi. Hata kiasi kidogo kinaweza kunisababishia mmenyuko mkali wa mzio unaohitaji matibabu.',
  peanuts: 'USITUMIE KARANGA (NJUGU)',
  treeNuts: 'USITUMIE KOKWA ZA MITI',
  avoidTitle: 'Siwezi kula karanga wala kokwa za miti zilizoorodheshwa hapa chini',
  avoidBody: 'Hii ni pamoja na mafuta, ekstrakti na unga unaotengenezwa kutokana na karanga au kokwa hizo. Vinaweza kuwamo katika pesto, sosi, vyakula vya kupaka kwenye mkate, mikate na keki.',
  nutsTitle: 'Kokwa za miti ninazopaswa kuepuka ni pamoja na',
  nuts: [
    'Lozi / badamu (almond)',
    'Hazelnut',
    'Makadamia (macadamia nut)',
    'Kokwa za Brazili (Brazil nut)',
    'Pistachio',
    'Korosho (cashew)',
    'Pekani (pecan)',
    'Jozi (walnut)'
  ],
  cautionTitle: 'Zuia chakula changu kugusana na karanga au kokwa hizi',
  cautionBody: 'Tafadhali tumia glavu safi, vyombo safi, sehemu safi za kuandalia chakula na sufuria safi. Tumia mafuta ya kukaangia ambayo hayajatumika kukaanga vyakula vyenye karanga au kokwa hizi. Hakikisha chakula changu hakigusani na karanga, kokwa hizi au mabaki yake wakati wa kukiandaa na kukipakua. Asante!',
  questionTitle: 'Je, chakula hiki kina karanga au kokwa za miti zilizoorodheshwa hapa?',
  questionBody: 'Tafadhali hakikisha viambato vyote na namna chakula kinavyoandaliwa kabla ya kunipakulia.',
  shareTitle: 'Shiriki kadi hii',
  shareBody: 'Changanua msimbo wa QR ili kufungua ukurasa huu kwa lugha iliyochaguliwa.',
  copy: 'Nakili kiungo',
  copied: 'Kiungo kimenakiliwa',
  copyFailed: 'Imeshindikana kunakili kiungo kiotomatiki',
  clarifyTitle: 'Ufafanuzi: ninaweza kula vyakula hivi',
  allowed: ['Ufuta (sesame)', 'Mbegu za msonobari (pine nuts)', 'Nazi (coconut)'],
  clarifyBody: 'Ninaweza kula viambato hivi tu ikiwa havijagusana na karanga au kokwa za miti zilizoorodheshwa hapo juu. Kwa mfano, pesto iliyotengenezwa kwa mbegu za msonobari si lazima iwe salama kwangu: tafadhali hakikisha viambato vyote na namna ilivyoandaliwa.'
};

qrUiLabels.sw = {
  open: 'Kuza msimbo wa QR',
  close: 'Funga msimbo wa QR'
};

select.add(new Option('Kiswahili', 'sw'));
