import MIDAS from '../assets/newsIMG/thumbnails/MIDAS_POST.webp'
import midasIMG1 from '../assets/newsIMG/img1.webp'
import midasIMG2 from '../assets/newsIMG/img2.webp'
import midasIMG3 from '../assets/newsIMG/img3.webp'

const formatDate = (dateString) => {
    const date = new Date(dateString);

    return `${date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
    })}, ${date.getFullYear()}`;
};

export const news = [
    {
        id: 1,
        publisher: "The MIDAS Cambodia",
        slug: "midas-on-batchII",
        thumbnail: MIDAS,
        headline: "ចូលរួមអបអរសាទរក្រុមឆ្នើមដែលទទួលបានជ័យជំនះក្នុងកម្មវិធី Next-Gen Engagement Program - Batch II របស់បណ្ឌិត្យសភាបច្ចេកវិទ្យាឌីជីថលកម្ពុជា",
        subtitle: "PHNOM PENH, CAMBODIA — From January 27 to 29, 2026, the Institute of Digital Governance of the Cambodia Academy of Digital Technology (CADT) collaborated with the Phnom Penh Capital Administration to organize a three-session training course titled “Using Artificial Intelligence (AI) for Work Efficiency.”",
        article: "កម្មវិធី Next-Gen Engagement Program - Batch II ដែលរៀបចំដោយបណ្ឌិត្យសភាបច្ចេកវិទ្យាឌីជីថលកម្ពុជា បានបញ្ចប់ដោយជោគជ័យក្នុងបរិយាកាសពោរពេញដោយភាពរីករាយនិងការចូលរួមយ៉ាងសកម្មពីសំណាក់និស្សិតកម្មវិធីនេះមានគោលបំណងបង្កើនសមត្ថភាពនិងលើកទឹកចិត្តយុវជនឲ្យចូលរួមក្នុងការច្នៃប្រឌិតនិងអភិវឌ្ឍគំនិតថ្មីៗក្នុងវិស័យឌីជីថល។ ក្នុងអំឡុងពេលកម្មវិធី មាននិស្សិតចំនួន 12 ក្រុមបានចូលរួមប្រកួតប្រជែង ដោយនាំយកគម្រោង និងគំនិតប្លែកៗមកបង្ហាញ។ការប្រកួតបានប្រព្រឹត្តទៅយ៉ាងរស់រវើកមានទាំងការពិភាក្សា ការបង្ហាញនិងការប្តេជ្ញាចិត្តពីសំណាក់អ្នកចូលរួមដែលបង្ហាញពីសមត្ថភាពនិងការខិតខំបរឹងប្រែងយ៉ាងច្បាស់។ ជាផ្នែកមួយនៃការគាំទ្រកម្មវិធី ក្រុមហ៊ុន Midassបានចូលរួមជាដៃគូឧបត្ថម្ភ ដោយផ្តល់នូវនំឆ្ងាញ់ៗនិងកាដូពិសេសៗជូនដល់អ្នកចូលរួមទាំងអស់។ ការគាំទ្រនេះបានរួមចំណែកយ៉ាងសំខាន់ក្នុងការលើកទឹកចិត្ត និងបង្កើនកម្លាំងចិត្តដល់និស្សិតក្នុងការចូលរួមប្រកួតប្រជែង និងអភិវឌ្ឍគំនិតរបស់ពួកគេ។ នៅចុងបញ្ចប់នៃកម្មវិធី ក៏មានការអបអរសាទរយ៉ាងកក់ក្តៅចំពោះក្រុមឆ្នើមដែលទទួលបានជ័យលាភី បង្ហាញពីសមត្ថភាព ការខិតខំប្រឹងប្រែងនិងភាពច្នៃប្រឌិតខ្ពស់។ជ័យលាភីទាំងនេះមិនត្រឹមតែជាការស្គាល់សមត្ថភាពប៉ុណ្ណោះទេ ប៉ុន្តែថែមទាំងជាកម្លាំងជំរុញឲ្យពួកគេបន្តអភិវឌ្ឍខ្លួន និងចូលរួមក្នុងការបង្កើតអនាគតឌីជីថលរបស់ប្រទេសកម្ពុជា។ កម្មវិធី Next-Gen Engagement Program បន្តបញ្ជាក់ពីសារៈសំខាន់នៃការសហការរវាងស្ថាប័នអប់រំ និងវិស័យឯកជន ក្នុងការបង្កើតបរិយាកាសអប់រំដែលលើកទឹកចិត្តការសិក្សា ការស្រាវជ្រាវ និងការច្នៃប្រឌិត។ ជាមួយនឹងភាពជោគជ័យនៃ Batch II នេះ កម្មវិធីនឹងបន្តជាវេទិកាសំខាន់មួយសម្រាប់យុវជនកម្ពុជាក្នុងការអភិវឌ្ឍសមត្ថភាព និងរួមចំណែកក្នុងសង្គមឌីជីថលនាពេលអនាគត។",
        date: formatDate("2026-01-25"),
        image: [midasIMG1, midasIMG2, midasIMG3]
    },
];