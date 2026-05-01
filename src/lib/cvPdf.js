import { cvData } from "../data/cv";

const PAGE_WIDTH = 210;
const PAGE_HEIGHT = 297;
const MARGIN_X = 18;
const TOP_MARGIN = 20;
const BOTTOM_LIMIT = 280;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN_X * 2;

function ensurePage(doc, y, requiredHeight = 10) {
  if (y + requiredHeight <= BOTTOM_LIMIT) {
    return y;
  }

  doc.addPage();
  return TOP_MARGIN;
}

function addSectionTitle(doc, title, y) {
  const nextY = ensurePage(doc, y, 12);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(14, 165, 233);
  doc.text(title.toUpperCase(), MARGIN_X, nextY);
  doc.setDrawColor(125, 211, 252);
  doc.setLineWidth(0.45);
  doc.line(MARGIN_X, nextY + 2, PAGE_WIDTH - MARGIN_X, nextY + 2);

  return nextY + 8;
}

function addParagraph(doc, text, y, options = {}) {
  const { indent = 0, font = "normal", fontSize = 10.8, color = [51, 65, 85] } = options;
  const maxWidth = CONTENT_WIDTH - indent;
  const lines = doc.splitTextToSize(text, maxWidth);
  const lineHeight = 5;
  const nextY = ensurePage(doc, y, lines.length * lineHeight + 2);

  doc.setFont("helvetica", font);
  doc.setFontSize(fontSize);
  doc.setTextColor(...color);
  doc.text(lines, MARGIN_X + indent, nextY);

  return nextY + lines.length * lineHeight + 1.5;
}

function addBulletList(doc, items, y) {
  let nextY = y;

  items.forEach((item) => {
    const bulletIndent = 7;
    const lines = doc.splitTextToSize(item, CONTENT_WIDTH - bulletIndent);
    const lineHeight = 5;

    nextY = ensurePage(doc, nextY, lines.length * lineHeight + 3);

    doc.setFillColor(14, 165, 233);
    doc.circle(MARGIN_X + 1.6, nextY - 1.7, 0.9, "F");
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10.5);
    doc.setTextColor(51, 65, 85);
    doc.text(lines, MARGIN_X + bulletIndent, nextY);

    nextY += lines.length * lineHeight + 1.5;
  });

  return nextY + 1;
}

function addEntryHeader(doc, title, meta, y) {
  let nextY = ensurePage(doc, y, 12);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(12.6);
  doc.setTextColor(15, 23, 42);
  doc.text(title, MARGIN_X, nextY);

  nextY += 5;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10.2);
  doc.setTextColor(71, 85, 105);
  doc.text(meta, MARGIN_X, nextY);

  return nextY + 4;
}

export async function downloadCvPdf() {
  const { jsPDF } = await import("jspdf");
  const doc = new jsPDF({
    unit: "mm",
    format: "a4",
  });

  doc.setFillColor(8, 15, 32);
  doc.roundedRect(12, 12, PAGE_WIDTH - 24, 34, 8, 8, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(24);
  doc.setTextColor(255, 255, 255);
  doc.text(cvData.name, MARGIN_X, 26);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11.5);
  doc.setTextColor(186, 230, 253);
  doc.text(`${cvData.role} | ${cvData.location}`, MARGIN_X, 33);
  doc.text(
    `${cvData.contact.email} | ${cvData.contact.phone}`,
    MARGIN_X,
    39,
  );

  let y = 56;

  y = addSectionTitle(doc, "Profile", y);
  y = addParagraph(doc, cvData.summary, y);

  y = addSectionTitle(doc, "Education", y + 3);
  cvData.education.forEach((item) => {
    y = addEntryHeader(doc, `${item.institution} (${item.years})`, item.title, y);
    y = addBulletList(doc, item.details, y);
  });

  y = addSectionTitle(doc, "Experience", y + 2);
  cvData.experience.forEach((item) => {
    y = addEntryHeader(doc, `${item.role} | ${item.company}`, item.duration, y);
    y = addBulletList(doc, item.highlights, y);
  });

  y = addSectionTitle(doc, "Technical Skills", y + 2);
  cvData.skillGroups.forEach((group) => {
    y = addParagraph(
      doc,
      `${group.title}: ${group.items.join(", ")}`,
      y,
      { font: "bold", fontSize: 10.7, color: [15, 23, 42] },
    );
  });

  y = addSectionTitle(doc, "Selected Projects", y + 2);
  cvData.projects.forEach((project) => {
    y = addEntryHeader(
      doc,
      project.title,
      project.stack.join(" | "),
      y,
    );
    y = addParagraph(doc, project.summary, y);
  });

  y = addSectionTitle(doc, "Links", y + 2);
  y = addParagraph(
    doc,
    `GitHub: ${cvData.contact.github}`,
    y,
    { font: "bold", fontSize: 10.6, color: [15, 23, 42] },
  );
  y = addParagraph(
    doc,
    `LinkedIn: ${cvData.contact.linkedin}`,
    y,
    { font: "bold", fontSize: 10.6, color: [15, 23, 42] },
  );

  const footerY = PAGE_HEIGHT - 10;
  doc.setDrawColor(203, 213, 225);
  doc.setLineWidth(0.3);
  doc.line(MARGIN_X, footerY - 4, PAGE_WIDTH - MARGIN_X, footerY - 4);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(100, 116, 139);
  doc.text("Generated from the portfolio using jsPDF.", MARGIN_X, footerY);

  doc.save("Danuka-Chathurya-CV.pdf");
}
