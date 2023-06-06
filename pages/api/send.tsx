import type { NextApiRequest, NextApiResponse } from "next";
import { GoogleSpreadsheet } from "google-spreadsheet";

const doc = new GoogleSpreadsheet(
  "189bi2jOCQLGzY2u6s3eh_LHT23zTvotkoFF1ScnPYSE"
);

async function sheets() {
  try {
    await doc.useServiceAccountAuth({
      client_email: "bath-building@bath-building.iam.gserviceaccount.com",
      private_key:
        "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCr6GZxvoYtefa6\nYtiqtu05EXZIz94mySKfkuzg3JEMRRZElyOeDk8NcowU7Hr2hNJj90IdC/jf9Fro\n3I13o2+j/y1d6q6/KeC0+0KBnbPozLyLCA06gp4fCyFB84XKZB5plW21P2NyloUF\nIcqF+uw591dHMcJtJAB1IS+6sKIftrKWFExyo8U0RNfmuzSp4iZbMmKe83OUfzkD\nzBNqNi0NSIMgM/UJbQd/lKhWbN1mJMnlVd5AiFxxg2RPmbWw/h+h0CexTOmQs6Du\nnBX4fyxB7B81GElvz3qhP9vh9KYr71iQF871vIqPLZ4jrMA1qBHduBGUtwCb8dPD\nDD/1TMMzAgMBAAECggEALu6PqVX+g8PcXB5IULMIKKBfzpkRaT1YOoB+MxWEc/kY\njzlD/A6j/mPbYor9NvgkCC6k2hE+rMWlXBV6ecMg44Dy/cToWEAynLZL/d70EwZy\nIvLbybGHQapkNgEp8YtL0j99aBIaMFpvjmsfQ1yxyVGBfmpTTkCZ72BUC3/VgxqG\njDiknzG68QZVSmrS30itu5CP5wxGGb4qkEY+esbwEwHNhXMZszsQ+hZIsR4EMoyn\nheFTbNnDnfTIX6TtM1sk/EnET2TzNEZSsfwyfdH3DFboDaH/P3rVRQJ2OypNjskm\nb+pn0Kdf/sLhrVOANt3rtbFbmWzsnMqJmn9SVciRYQKBgQDpaXIDc+B7txLbt1lt\nzOakKuSlEMZ05hVLFtCNaycxeu6D4tGieVm5hvP+eOlTGRzxqDDI7fejAKgDbVWe\nw8xWf0kh/cRgdIpKQr6puZL8xRo8GPaC9te1dxmNCiJ6w2p+GLRoVCj8M/mB18FH\n5gnt+4FC8Rree2Oq5+KPkL3StwKBgQC8i0AepUZu0oKmRMkBYbXmSNLQKVR3/CGk\nAQCT45+9VRYOBDM7haXuQyeT1uSzq/eA+weIYrAUuvePhaVCBLZGBhnQhBHbGzlS\nM+wCn5TWLBgpq2mILsPZiqWpId81SzwJUwiiZSaTl1BDNieZW33TBRxKRzrAhYZ0\nyd2O5WdnZQKBgQCW4W6uBK3LyyAJn4/ThmxhGskKWrmuvzxseab+g5GmToz3/Br/\nJ+p0H2SBzq8k5Erte4dtm0ZEvBvfe0Gpi2//SfCAZIYYw7zRHCwbkrYNZ2v6BTj0\nl5QA3ahKn46CROgF8vpLpnuH7CERaeKrE2y/xaBdIXX481IOHC88FpheKQKBgQCO\njzenNE6CIveYYnAddFUGT0/fBzEQG/sPt5ZJPBYfIUOwy2o1ekNRWUOGnDiGxeM5\nihVTAVOkCQ6AXYvr1AZCAgDo0cNyiS4ZQpsUDLeMDQEkGLCNwNZjGVtS/AJ6mG1H\nm5nuuE6n0ARnHX5pjW0g7j9Kxnrc8NkOW0gD8N7zpQKBgDAVO9fV0/sDmp+GJnab\naUXImTUyb/axR8pGVjP45innlrrTaGppnmwI4aiD4b7UF6747zz50dnDcgn8BmX6\nbFhUgbhff12QKnbT5jKJDkm6DuBWAybe0zzzQxNpZowNcImeCyuOP61UgOZCUE0m\nM/qUED/4eV2CN3+gX/XFvSf5\n-----END PRIVATE KEY-----\n",
    });
  } catch (e) {
    console.log(e);
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    sheets();

    const { name, phone, message } = req.body as any;

    await doc.loadInfo();

    const sheet = await doc.sheetsByTitle["applications"];

    await sheet.addRow({
      name,
      phone,
      message,
    });

    res.status(200).json({
      message: "ok",
    });
  } catch (e) {
    console.log(e);
  }
}
