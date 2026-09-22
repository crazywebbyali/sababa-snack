# Sababa Snack — Website

موقع منيو احترافي لـ **صبابا سناك**، جاهز للعمل على VS Code والرفع على GitHub Pages.

## التشغيل على VS Code

أسهل طريقة:
1. افتح مجلد `sababa-snack` في VS Code.
2. نزّل إضافة **Live Server**.
3. اضغط يمين على `index.html` ثم **Open with Live Server**.

أو افتح `index.html` مباشرة بالمتصفح.

## تعديل المنيو والأسعار

كل الأصناف والأسعار موجودة في ملف واحد:

`js/menu-data.js`

عدّل الاسم أو السعر من هناك وسيظهر بالموقع مباشرة.

## تعديل الفروع

الفروع وروابط Google Maps موجودة أيضًا داخل:

`js/menu-data.js`

في المتغير `BRANCHES`.

## روابط التواصل الحالية

- الرقم الموحد: `0793030800`
- Instagram: `@sababa.snack`
- Facebook: الرابط الذي زوّد به العميل

## رفعه على GitHub

اسم GitHub: `crazywebbyali`

من Terminal داخل المشروع:

```bash
git init
git add .
git commit -m "Sababa Snack website"
git branch -M main
git remote add origin https://github.com/crazywebbyali/sababa-snack.git
git push -u origin main
```

بعد إنشاء Repository باسم `sababa-snack` على GitHub:
Settings → Pages → Deploy from a branch → `main` / `(root)`.

الرابط المتوقع:
`https://crazywebbyali.github.io/sababa-snack/`

## Google / SEO

المشروع يحتوي:
- `robots.txt`
- `sitemap.xml`
- Meta Description
- Open Graph
- Restaurant Schema JSON-LD
- Responsive design
- Semantic HTML

بعد نشر الموقع نضيفه إلى **Google Search Console** ونرسل:
`https://crazywebbyali.github.io/sababa-snack/sitemap.xml`

## ملاحظة مهمة قبل الإطلاق النهائي

المنيو تم ترتيبه اعتمادًا على صور المنيو التي تم تزويدنا بها. لأن بعض أجزاء الصور فيها انعكاس ضوء، راجع أسماء/أسعار الأصناف مرة أخيرة مع صاحب المطعم قبل الإطلاق الرسمي. تعديل أي سعر لا يحتاج إلا ثوانٍ من `js/menu-data.js`.
