import React, { useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
const Format = () => {
  const [formData, setFormData] = useState({
    circle: "",
    siteId: "",
    siteName: "",
    dateOfCertificate: "",
    dateOfInspection: "",
    strengtheningDRGNo: "",
    typeOfSite: "",
    TowerHeight: "",
    MTRs: "",
    towerChief: "",
    contactNo: "",
    NameOfRITAuditEng: "",
    strengtheningVendor: "",
    STRVendorRepName: "",
    deviation: "",
    componentsInstalled: "",
    problemFaced: "",
    problemResolved: "",
    missingMembers: "",
    missingMembersDetails: "",
    missingBolts: "",
    missingBoltsDetails: "",
    missingLocation: "",
    componentsMarked: "",
    boltsFullyTightened: "",
    clampingTightened: "",
    // activity 1
    deviationAtConnection: "",
    deviationResolved: "",
    componentsInstalledAsPerDrawing: "",
    AnyMissingMembers: "",
    ReplacedBoltsExitingTower: "",
    AllStrengtheningComp: "",
    AllTowerBolts: "",
    DryClamping: "",
    MissingNuts: "",
    MissingNutsLock: "",
    LessThreaded: "",
    RustedFoundation: "",
    GrountingUnderSide: "",
    FlangeGaps: "",
    ForcedFitting: "",
    BackFilling: "",
    GeneralFeel: "",
    remarks1: "",
    remarks2: "",
    remarks3: "",
    remarks4: "",
    remarks5: "",
    remarks6: "",
    remarks7: "",
    remarks8: "",
    remarks9: "",
    remarks10: "",
    remarks11: "",
    remarks12: "",
    remarks13: "",
    remarks14: "",
    remarks15: "",
    remarks16: "",
    remarks17: "",
    // Add more fields
    problemFacedOptions: [],
    problemResolvedDetails: "",
    Describehowitwasresolved: "",
    Describehowitwasresolved1: "",
    MemberDetailsAreRequired: "",
    GivenDetailsOfNos: "",
    SpecifyLocation: "",
    PartiallyFixed: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when button is clicked
    try {
      const doc = new jsPDF("p", "mm", "a4");
      const input = document.getElementById("form-container");
      const sections = Array.from(input.children);

      let yOffset = 0;
      const pageHeight = doc.internal.pageSize.getHeight();
      const pdfWidth = doc.internal.pageSize.getWidth();

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const canvas = await html2canvas(section, { scale: 2 });

        const imgData = canvas.toDataURL("image/png");
        const imgProps = doc.getImageProperties(imgData);
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        if (yOffset + pdfHeight > pageHeight) {
          doc.addPage();
          yOffset = 0;
        }

        doc.addImage(imgData, "PNG", 0, yOffset, pdfWidth, pdfHeight);
        yOffset += pdfHeight;
      }

      doc.save("form.pdf");
    } finally {
      setLoading(false); // Set loading to false when PDF generation is complete
    }
  };
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevFormData) => {
      if (checked) {
        return {
          ...prevFormData,
          problemFacedOptions: [...prevFormData.problemFacedOptions, value],
        };
      } else {
        return {
          ...prevFormData,
          problemFacedOptions: prevFormData.problemFacedOptions.filter(
            (option) => option !== value
          ),
        };
      }
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div
          id="form-container"
          className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-md space-y-6"
        >
          {/* Image Section  */}
          <div className="flex flex-col">
            <nav className="flex justify-between items-center px-2">
              <div className="text-red-500 font-bold text-lg">airtel</div>
              <div className="text-lg font-semibold">
                Tower Strengthening Check List
              </div>
              <div className="flex items-center">
                <div className="bg-red-500 w-8 h-8 text-white font-semibold text-lg flex items-center justify-center">
                  Q
                </div>
                <div className="flex flex-col">
                  <div className="flex">
                    <h1 className="text-xs font-semibold">quality</h1>
                    <span className="text-xs">austria</span>
                  </div>
                  <div className="flex flex-col">
                    <h2 className="text-xs font-semibold">central asia</h2>
                    <p className="text-xs italic font-serif text-red-700 font-thin">
                      Succeed with Quality
                    </p>
                  </div>
                </div>
              </div>
            </nav>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Circle
                    </label>
                    <textarea
                      type="text"
                      name="circle"
                      value={formData.circle}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Site ID
                    </label>
                    <textarea
                      type="text"
                      name="siteId"
                      value={formData.siteId}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Site Name
                    </label>
                    <textarea
                      type="text"
                      name="siteName"
                      value={formData.siteName}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Date of Certificate
                    </label>
                    <textarea
                      type="text"
                      name="dateOfCertificate"
                      value={formData.dateOfCertificate}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Date of Inspection
                    </label>
                    <textarea
                      type="text"
                      name="dateOfInspection"
                      value={formData.dateOfInspection}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Name of RIT Audit Eng
                    </label>
                    <textarea
                      type="text"
                      name="NameOfRITAuditEng"
                      value={formData.NameOfRITAuditEng}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Strengthening DRG No
                    </label>
                    <textarea
                      type="text"
                      name="strengtheningDRGNo"
                      value={formData.strengtheningDRGNo}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none"
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Type of Site
                    </label>
                    <textarea
                      type="text"
                      name="typeOfSite"
                      value={formData.typeOfSite}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Tower Height
                    </label>
                    <textarea
                      type="text"
                      name="TowerHeight"
                      value={formData.TowerHeight}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      MTRs
                    </label>
                    <textarea
                      type="text"
                      name="MTRs"
                      value={formData.MTRs}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Tower Conf
                    </label>
                    <textarea
                      type="text"
                      name="towerChief"
                      value={formData.towerChief}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Contact No
                    </label>
                    <textarea
                      type="text"
                      name="contactNo"
                      value={formData.contactNo}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Strengthening Vendor
                    </label>
                    <textarea
                      type="text"
                      name="strengtheningVendor"
                      value={formData.strengtheningVendor}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      STR Vendor Representative Name
                    </label>
                    <textarea
                      type="text"
                      name="STRVendorRepName"
                      value={formData.STRVendorRepName}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
                   
          </div>
{/* section 1 */}
<table className="w-full border-collapse border border-gray-400">
            <thead>
              <tr className="bg-gray-200">
                <td
                  colSpan="5"
                  className="border border-gray-300 p-2 font-bold"
                >
                  I Strengthening Activity
                </td>
              </tr>
              <tr>
                <th className="border border-gray-300 p-2">#</th>
                <th className="border border-gray-300 p-2">Item</th>
                <th className="border border-gray-300 p-2">Observation</th>
                <th className="border border-gray-300 p-2">Remarks</th>
              </tr>
            </thead>
            <tbody>
            <tr>
                <td className="border border-gray-300 p-2">1</td>
                <td className="border border-gray-300 p-2">
                  Was there any deviation at connection interface between
                  fabrication material and existing tower
                </td>
                <td className="border border-gray-300 p-2">
                  <label className="grid grid-cols-1 items-center justify-center">
                    <div className="flex">
                      <input
                        type="checkbox"
                        name="deviationAtConnection"
                        value="Yes"
                        checked={formData.deviationAtConnection === "Yes"}
                        onChange={handleChange}
                        className="form-checkbox"
                      />
                      <span className="ml-2">Yes</span>
                    </div>
                  </label>
                  <label className="grid grid-cols-1 items-center justify-center">
                    <div className="flex">
                      <input
                        type="checkbox"
                        name="deviationAtConnection"
                        value="No"
                        checked={formData.deviationAtConnection === "No"}
                        onChange={handleChange}
                        className="form-checkbox"
                      />
                      <span className="ml-2">No</span>
                    </div>
                  </label>
                </td>
                <td className="border border-gray-300 p-2">
                  <textarea
                    name="remarks1"
                    value={formData.remarks1}
                    onChange={handleChange}
                    className="mt-1 block w-full h-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none"
                  />
                </td>
              </tr>   
            <tr>
                <td className="border border-gray-300 p-2">1.1</td>
                <td className="border border-gray-300 p-2">
                  If Yes to #1 above. Describe how it was resolved
                </td>
                <td>
                  <textarea
                    rows={4}
                    name="Describehowitwasresolved"
                    value={formData.Describehowitwasresolved}
                    onChange={handleChange}
                    className="mt-1 block w-full h-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none"
                  />
                </td>
                <td>
                  <textarea
                    rows={4}
                    name="Describehowitwasresolved1"
                    value={formData.Describehowitwasresolved1}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none"
                  />
                </td>
              </tr>

              <tr>
                <td className="border border-gray-300 p-2">2</td>
                <td className="border border-gray-300 p-2">
                  All strenghtening componets installed as per drawing without
                  any fitment concern
                </td>
                <td className="border border-gray-300 p-2">
                  <label className="grid grid-cols-1 items-center justify-center">
                    <div className="flex">
                      <input
                        type="checkbox"
                        name="componentsInstalledAsPerDrawing"
                        value="Yes"
                        checked={
                          formData.componentsInstalledAsPerDrawing === "Yes"
                        }
                        onChange={handleChange}
                        className="form-checkbox"
                      />
                      <span className="ml-2">Yes</span>
                    </div>
                  </label>
                  <label className="grid grid-cols-1 items-center justify-center">
                    <div className="flex">
                      <input
                        type="checkbox"
                        name="componentsInstalledAsPerDrawing"
                        value="No"
                        checked={
                          formData.componentsInstalledAsPerDrawing === "No"
                        }
                        onChange={handleChange}
                        className="form-checkbox"
                      />
                      <span className="ml-2">No</span>
                    </div>
                  </label>
                </td>
                <td className="border border-gray-300 p-2">
                  <textarea
                    rows={4}
                    name="remarks2"
                    value={formData.remarks2}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none"
                  />
                </td>
              </tr>

              <tr>
                <td className="border border-gray-300 p-2">2.1</td>
                <td className="border border-gray-300 p-2">
                  If Yes to #2 above. Describe with the problem was faced & how
                  it was resolved ( with photos)
                </td>
                <td>
                  <label className="block text-sm font-medium text-gray-700">
                    Problem Faced:
                  </label>
                  <label className="grid grid-cols-1 items-center justify-center">
                    <div className="flex">
                      <input
                        type="checkbox"
                        name="problemFacedOptions"
                        value="Supplied material not as per Drawing"
                        checked={formData.problemFacedOptions.includes(
                          "Supplied material not as per Drawing"
                        )}
                        onChange={handleCheckboxChange}
                        className="form-checkbox"
                      />
                      <span className="ml-2">
                        A) Supplied material not as per Drawing
                      </span>
                    </div>
                  </label>
                  <label className="grid grid-cols-1 items-center justify-center">
                    <div className="flex">
                      <input
                        type="checkbox"
                        name="problemFacedOptions"
                        value="Deviation in drg. And site tower dimensions"
                        checked={formData.problemFacedOptions.includes(
                          "Deviation in drg. And site tower dimensions"
                        )}
                        onChange={handleCheckboxChange}
                        className="form-checkbox"
                      />
                      <span className="ml-2">
                        B) Deviation in drg. And site tower dimensions
                      </span>
                    </div>
                  </label>
                  <label className="grid grid-cols-1 items-center justify-center">
                    <div className="flex">
                      <input
                        type="checkbox"
                        name="problemFacedOptions"
                        value="Site cond. Not as per drg. (members bent/ distorted)"
                        checked={formData.problemFacedOptions.includes(
                          "Site cond. Not as per drg. (members bent/ distorted)"
                        )}
                        onChange={handleCheckboxChange}
                        className="form-checkbox"
                      />
                      <span className="ml-2">
                        C) Site cond. Not as per drg. (members bent/ distorted)
                      </span>
                    </div>
                  </label>
                  <label className="grid grid-cols-1 items-center justify-center">
                    <div className="flex">
                      <input
                        type="checkbox"
                        name="problemFacedOptions"
                        value="Shortfall of supplied material"
                        checked={formData.problemFacedOptions.includes(
                          "Shortfall of supplied material"
                        )}
                        onChange={handleCheckboxChange}
                        className="form-checkbox"
                      />
                      <span className="ml-2">
                        D) Shortfall of supplied material
                      </span>
                    </div>
                  </label>
                  <label className="grid grid-cols-1 items-center justify-center">
                    <div className="flex">
                      <input
                        type="checkbox"
                        name="problemFacedOptions"
                        value="Bolts dia. Or size mismatch"
                        checked={formData.problemFacedOptions.includes(
                          "Bolts dia. Or size mismatch"
                        )}
                        onChange={handleCheckboxChange}
                        className="form-checkbox"
                      />
                      <span className="ml-2">
                        E) Bolts dia. Or size mismatch
                      </span>
                    </div>
                  </label>
                  <label className="grid grid-cols-1 items-center justify-center">
                    <div className="flex">
                      <input
                        type="checkbox"
                        name="problemFacedOptions"
                        value="Others"
                        checked={formData.problemFacedOptions.includes(
                          "Others"
                        )}
                        onChange={handleCheckboxChange}
                        className="form-checkbox"
                      />
                      <span className="ml-2">F) Others</span>
                    </div>
                  </label>
                </td>
                <td>
                  <label className="block text-sm font-medium text-gray-700 mt-4">
                    Describe how the problem was resolved
                  </label>
                  <textarea
                    rows={10}
                    name="problemResolvedDetails"
                    value={formData.problemResolvedDetails}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none"
                  />
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">3</td>
                <td className="border border-gray-300 p-2">
                  Any Missing Members in the existing tower
                </td>
                <td className="border border-gray-300 p-2">
                  <label className="grid grid-cols-1 items-center justify-center">
                    <div className="flex">
                      <input
                        type="checkbox"
                        name="AnyMissingMembers"
                        value="Yes"
                        checked={formData.AnyMissingMembers === "Yes"}
                        onChange={handleChange}
                        className="form-checkbox"
                      />
                      <span className="ml-2">Yes</span>
                    </div>
                  </label>
                  <label className="grid grid-cols-1 items-center justify-center">
                    <div className="flex">
                      <input
                        type="checkbox"
                        name="AnyMissingMembers"
                        value="No"
                        checked={formData.AnyMissingMembers === "No"}
                        onChange={handleChange}
                        className="form-checkbox"
                      />
                      <span className="ml-2">No</span>
                    </div>
                  </label>
                </td>
                <td className="border border-gray-300 p-2">
                  <textarea
                    name="remarks3"
                    value={formData.remarks3}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none"
                  />
                </td>
              </tr>
              </tbody>
            </table> 
{/* section 2 */}
            <table className="w-full border-collapse border border-gray-400">
            <thead>

              <tr>
                <td className="border border-gray-300 p-2">3.1</td>
                <td className="border border-gray-300 p-2">
                  If yes to #3 above, mention locations, size, and exact member
                  details are required
                </td>
                <td>
                  <textarea
                    name="MemberDetailsAreRequired"
                    value={formData.MemberDetailsAreRequired}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none"
                  />
                </td>
                <td>
                  <label className="flex flex-col items-center justify-center">
                    <div className="flex justify-center items-center">
                      <input
                        type="checkbox"
                        name="MemberDetailsAreRequired"
                        value="No"
                        checked={formData.MemberDetailsAreRequired === "N/A"}
                        onChange={handleChange}
                        className="form-checkbox"
                      />
                      <span className="ml-2">N/A</span>
                    </div>
                  </label>
                </td>
              </tr>

              <tr>
                <td className="border border-gray-300 p-2">4</td>
                <td className="border border-gray-300 p-2">
                  Any missing / replaced bolts in the existing tower
                </td>
                <td className="border border-gray-300 p-2">
                  <label className="grid grid-cols-1 items-center justify-center">
                    <div className="flex">
                      <input
                        type="checkbox"
                        name="ReplacedBoltsExitingTower"
                        value="Yes But Fixed"
                        checked={
                          formData.ReplacedBoltsExitingTower === "Yes But Fixed"
                        }
                        onChange={handleChange}
                        className="form-checkbox"
                      />
                      <span className="ml-2">Yes But Fixed</span>
                    </div>
                  </label>
                  <label className="grid grid-cols-1 items-center justify-center">
                    <div clssName="flex">
                      <input
                        type="checkbox"
                        name="ReplacedBoltsExitingTower"
                        value="No Partially Fixed"
                        checked={
                          formData.ReplacedBoltsExitingTower ===
                          "No Partially Fixed"
                        }
                        onChange={handleChange}
                        className="form-checkbox"
                      />
                      <span className="ml-2">No Partially Fixed</span>
                    </div>
                  </label>
                </td>
                <td className="border border-gray-300 p-2">
                  <textarea
                    name="remarks4"
                    value={formData.remarks4}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none"
                  />
                </td>
              </tr>

              <tr>
                <td className="border border-gray-300 p-2">4.1</td>
                <td className="border border-gray-300 p-2">
                  If yes but fixed. Given details of nos, size,length,grade (in
                  columns C.D) and weights (in cols E)
                </td>

                <td>
                  <textarea
                    rows={4}
                    name="GivenDetailsOfNos"
                    value={formData.GivenDetailsOfNos}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none"
                  />
                </td>
                <td>
                  <label className="grid grid-cols-1 items-center justify-center">
                    <div className="flex justify-center items-center">
                      <input
                        type="checkbox"
                        name="GivenDetailsOfNos"
                        value="No"
                        checked={formData.GivenDetailsOfNos === "N/A"}
                        onChange={handleChange}
                        className="form-checkbox"
                      />
                      <span className="ml-2">N/A</span>
                    </div>
                  </label>
                </td>
              </tr>

              <tr>
                <td className="border border-gray-300 p-2">4.2</td>
                <td className="border border-gray-300 p-2">
                  If yes but partially fixed. Given details of nos,
                  size,length,grade (in columns C.D) and weights (in cols E)
                </td>
                <td>
                  <textarea
                    rows={4}
                    name="PartiallyFixed"
                    value={formData.PartiallyFixed}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none"
                  />
                </td>
                <td>
                  <label className="grid grid-cols-1 items-center justify-center">
                    <div className="flex justify-center items-center">
                      <input
                        type="checkbox"
                        name="PartiallyFixed"
                        value="No"
                        checked={formData.PartiallyFixed === "N/A"}
                        onChange={handleChange}
                        className="form-checkbox"
                      />
                      <span className="ml-2">N/A</span>
                    </div>
                  </label>
                </td>
              </tr>

              <tr>
                <td className="border border-gray-300 p-2">4.2.1</td>
                <td className="border border-gray-300 p-2">
                  Specify location and details where missing bolts not fixed &
                  Mark in STR DWG single line diagram
                </td>
                <td>
                  <textarea
                    rows={4}
                    name="SpecifyLocation"
                    value={formData.SpecifyLocation}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none"
                  />
                </td>
                <td>
                  <label className="grid grid-cols-1 items-center justify-center">
                    <div className="flex justify-center items-center">
                      <input
                        type="checkbox"
                        name="SpecifyLocation"
                        value="No"
                        checked={formData.SpecifyLocation === "N/A"}
                        onChange={handleChange}
                        className="form-checkbox"
                      />
                      <span className="ml-2">N/A</span>
                    </div>
                  </label>
                </td>
              </tr> 

              <tr>
                <td className="border border-gray-300 p-2">5</td>
                <td className="border border-gray-300 p-2">
                  All strenghtening components and new/ replaced bolts marked
                  with green indents
                </td>
                <td className="border border-gray-300 p-2">
                  <label className="grid grid-cols-1 items-center justify-center">
                    <div className="flex">
                      <input
                        type="checkbox"
                        name="AllStrengtheningComp"
                        value="Yes"
                        checked={formData.AllStrengtheningComp === "Yes"}
                        onChange={handleChange}
                        className="form-checkbox"
                      />
                      <span className="ml-2">Yes</span>
                    </div>
                  </label>
                  <label className="grid grid-cols-1 items-center justify-center">
                    <div className="flex">
                      <input
                        type="checkbox"
                        name="AllStrengtheningComp"
                        value="No"
                        checked={formData.AllStrengtheningComp === "No"}
                        onChange={handleChange}
                        className="form-checkbox"
                      />
                      <span className="ml-2">No</span>
                    </div>
                  </label>
                </td>
                <td className="border border-gray-300 p-2">
                  <textarea
                    name="remarks5"
                    value={formData.remarks5}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none"
                  />
                </td>
              </tr>

              <tr>
                <td className="border border-gray-300 p-2">6</td>
                <td className="border border-gray-300 p-2">
                  All tower bolts existing and new fully tightened
                </td>
                <td className="border border-gray-300 p-2">
                  <label className="grid grid-cols-1 items-center justify-center">
                    <div className="flex">
                      <input
                        type="checkbox"
                        name="AllTowerBolts"
                        value="Yes"
                        checked={formData.AllTowerBolts === "Yes"}
                        onChange={handleChange}
                        className="form-checkbox"
                      />
                      <span className="ml-2">Yes</span>
                    </div>
                  </label>
                  <label className="grid grid-cols-1 items-center justify-center">
                    <div className="flex">
                      <input
                        type="checkbox"
                        name="AllTowerBolts"
                        value="No"
                        checked={formData.AllTowerBolts === "No"}
                        onChange={handleChange}
                        className="form-checkbox"
                      />
                      <span className="ml-2">No</span>
                    </div>
                  </label>
                </td>
                <td className="border border-gray-300 p-2">
                  <textarea
                    name="remarks6"
                    value={formData.remarks6}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none"
                  />
                </td>
              </tr>  

              <tr>
                <td className="border border-gray-300 p-2">7</td>
                <td className="border border-gray-300 p-2">
                  Dry clamping tightening using Grade 8.8 bolts as per required
                  Torque, viz., M12 -not required, M16-200 N-m,M20-400 N-m
                </td>
                <td className="border border-gray-300 p-2">
                  <label className="grid grid-cols-1 items-center justify-center">
                    <div className="flex">
                      <input
                        type="checkbox"
                        name="DryClamping"
                        value="Yes"
                        checked={formData.DryClamping === "Yes"}
                        onChange={handleChange}
                        className="form-checkbox"
                      />
                      <span className="ml-2">Yes</span>
                    </div>
                  </label>
                  <label className="grid grid-cols-1 items-center justify-center">
                    <div className="flex">
                      <input
                        type="checkbox"
                        name="DryClamping"
                        value="No"
                        checked={formData.DryClamping === "No"}
                        onChange={handleChange}
                        className="form-checkbox"
                      />
                      <span className="ml-2">No</span>
                    </div>
                  </label>
                </td>
                <td className="border border-gray-300 p-2">
                  <textarea
                    name="remarks7"
                    value={formData.remarks7}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none"
                  />
                </td>
              </tr>                        
            </thead>
            </table>
{/* section 3 */}
              <table className="w-full border-collapse border border-gray-400 p-2">
            <thead>
              <tr className="bg-gray-200">
                <td
                  colSpan="5"
                  className="border border-gray-300 p-2 font-bold"
                >
                  II Existing Tower Health - Post Erection
                </td>
              </tr>
              <tr>
                <th className="border border-gray-300 p-2">#</th>
                <th className="border border-gray-300 p-2">Item</th>
                <th className="border border-gray-300 p-2">Observation</th>
                <th className="border border-gray-300 p-2">Remarks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">8</td>
                <td className="border border-gray-300 p-2">
                  Missing nuts at foundation bolts ( Mention Qty and weights in
                  Col' E)
                </td>
                <td className="border border-gray-300 p-2">
                  <label className="grid grid-cols-1 items-center justify-center">
                    <div className="flex">
                      <input
                        type="checkbox"
                        name="MissingNuts"
                        value="Yes But Fixed"
                        checked={formData.MissingNuts === "Yes But Fixed"}
                        onChange={handleChange}
                        className="form-checkbox"
                      />
                      <span className="ml-2">Yes But Fixed</span>
                    </div>
                  </label>
                  <label className="grid grid-cols-1 items-center justify-center">
                    <div className="flex">
                      <input
                        type="checkbox"
                        name="MissingNuts"
                        value="No Partially Fixed"
                        checked={formData.MissingNuts === "No Partially Fixed"}
                        onChange={handleChange}
                        className="form-checkbox"
                      />
                      <span className="ml-2">No Partially Fixed</span>
                    </div>
                  </label>
                </td>
                <td className="border border-gray-300 p-2">
                  <textarea
                    rows={4}
                    name="remarks8"
                    value={formData.remarks8}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none"
                  />
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">9</td>
                <td className="border border-gray-300 p-2">
                  Missing lock nuts at foundation bolts ( Mention Qty and
                  weights in Col' E)
                </td>
                <td className="border border-gray-300 p-2">
                  <label className="grid grid-cols-1 items-center justify-center">
                    <div className="flex">
                      <input
                        type="checkbox"
                        name="MissingNutsLock"
                        value="Yes But Fixed"
                        checked={formData.MissingNutsLock === "Yes But Fixed"}
                        onChange={handleChange}
                        className="form-checkbox"
                      />
                      <span className="ml-2">Yes But Fixed</span>
                    </div>
                  </label>
                  <label className="grid grid-cols-1 items-center justify-center">
                    <div className="flex">
                      <input
                        type="checkbox"
                        name="MissingNutsLock"
                        value="No Partially Fixed"
                        checked={
                          formData.MissingNutsLock === "No Partially Fixed"
                        }
                        onChange={handleChange}
                        className="form-checkbox"
                      />
                      <span className="ml-2">No Partially Fixed</span>
                    </div>
                  </label>
                </td>
                <td className="border border-gray-300 p-2">
                  <textarea
                    rows={4}
                    name="remarks9"
                    value={formData.remarks9}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none"
                  />
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">10</td>
                <td className="border border-gray-300 p-2">
                  Less threaded foundation bolts
                </td>
                <td className="border border-gray-300 p-2">
                  <label className="grid grid-cols-1 items-center justify-center">
                    <div className="flex">
                      <input
                        type="checkbox"
                        name="LessThreaded"
                        value="Found"
                        checked={formData.LessThreaded === "Found"}
                        onChange={handleChange}
                        className="form-checkbox"
                      />
                      <span className="ml-2">Found</span>
                    </div>
                  </label>
                  <label className="grid grid-cols-1 items-center justify-center">
                    <div className="flex">
                      <input
                        type="checkbox"
                        name="LessThreaded"
                        value="Not Found"
                        checked={formData.LessThreaded === "Not Found"}
                        onChange={handleChange}
                        className="form-checkbox"
                      />
                      <span className="ml-2">Not Found</span>
                    </div>
                  </label>
                </td>
                <td className="border border-gray-300 p-2">
                  <textarea
                    rows={4}
                    name="remarks10"
                    value={formData.remarks10}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none"
                  />
                </td>
              </tr>

              <tr>
      <td className="border border-gray-300 p-2">11</td>
      <td className="border border-gray-300 p-2">
        Rusted foundation bolts
      </td>
      <td className="border border-gray-300 p-2">
        <label className="grid grid-cols-1 items-center justify-center">
          <div className="flex">
            <input
              type="checkbox"
              name="RustedFoundation"
              value="Found"
              checked={formData.RustedFoundation === "Found"}
              onChange={handleChange}
              className="form-checkbox"
            />
            <span className="ml-2">Found</span>
          </div>
        </label>
        <label className="grid grid-cols-1 items-center justify-center">
          <div className="flex">
            <input
              type="checkbox"
              name="RustedFoundation"
              value="Not Found"
              checked={formData.RustedFoundation === "Not Found"}
              onChange={handleChange}
              className="form-checkbox"
            />
            <span className="ml-2">Not Found</span>
          </div>
        </label>
      </td>
      <td className="border border-gray-300 p-2">
        <textarea
          name="remarks11"
          value={formData.remarks11}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none"
        />
      </td>
    </tr>

    <tr>
      <td className="border border-gray-300 p-2">12</td>
      <td className="border border-gray-300 p-2">
        Grounting underside of base plate
      </td>
      <td className="border border-gray-300 p-2">
        <label className="grid grid-cols-1 items-center justify-center">
          <div className="flex">
            <input
              type="checkbox"
              name="GrountingUnderSide"
              value="Yes"
              checked={formData.GrountingUnderSide === "Yes"}
              onChange={handleChange}
              className="form-checkbox"
            />
            <span className="ml-2">Yes</span>
          </div>
        </label>
        <label className="grid grid-cols-1 items-center justify-center">
          <div className="flex">
            <input
              type="checkbox"
              name="GrountingUnderSide"
              value="No"
              checked={formData.GrountingUnderSide === "No"}
              onChange={handleChange}
              className="form-checkbox"
            />
            <span className="ml-2">No</span>
          </div>
        </label>
      </td>
      <td className="border border-gray-300 p-2">
        <textarea
          name="remarks12"
          value={formData.remarks12}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none"
        />
      </td>
    </tr>

    <tr>
      <td className="border border-gray-300 p-2">13</td>
      <td className="border border-gray-300 p-2">Flange gaps</td>
      <td className="border border-gray-300 p-2">
        <label className="grid grid-cols-1 items-center justify-center">
          <div className="flex">
            <input
              type="checkbox"
              name="FlangeGaps"
              value="Yes But Fixed"
              checked={formData.FlangeGaps === "Yes But Fixed"}
              onChange={handleChange}
              className="form-checkbox"
            />
            <span className="ml-2">Yes But Fixed</span>
          </div>
        </label>
        <label className="grid grid-cols-1 items-center justify-center">
          <div className="flex">
            <input
              type="checkbox"
              name="FlangeGaps"
              value="No Partially Fixed"
              checked={formData.FlangeGaps === "No Partially Fixed"}
              onChange={handleChange}
              className="form-checkbox"
            />
            <span className="ml-2">No Partially Fixed</span>
          </div>
        </label>
      </td>
      <td className="border border-gray-300 p-2">
        <textarea
          name="remarks13"
          value={formData.remarks13}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-smoutline-none"
        />
      </td>
    </tr>

    <tr>
      <td className="border border-gray-300 p-2">14</td>
      <td className="border border-gray-300 p-2">
        Forced fittings/ Bent members observed in the original tower
      </td>
      <td className="border border-gray-300 p-2">
        <label className="grid grid-cols-1 items-center justify-center">
          <div className="flex">
            <input
              type="checkbox"
              name="ForcedFitting"
              value="Yes"
              checked={formData.ForcedFitting === "Yes"}
              onChange={handleChange}
              className="form-checkbox"
            />
            <span className="ml-2">Yes</span>
          </div>
        </label>
        <label className="grid grid-cols-1 items-center justify-center">
          <div className="flex">
            <input
              type="checkbox"
              name="ForcedFitting"
              value="No"
              checked={formData.ForcedFitting === "No"}
              onChange={handleChange}
              className="form-checkbox"
            />
            <span className="ml-2">No</span>
          </div>
        </label>
      </td>
      <td className="border border-gray-300 p-2">
        <textarea
          name="remarks14"
          value={formData.remarks14}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none"
        />
      </td>
    </tr>             
            </tbody>
            </table>
{/* section 4 */}
<div  className="flex flex-col">
<table className="w-full border-collapse border border-gray-400">
  <thead>


    <tr>
      <td className="border border-gray-300 p-2">15</td>
      <td className="border border-gray-300 p-2">
        Back filling at site
      </td>
      <td className="border border-gray-300 p-2">
        <label className="grid grid-cols-1 items-center justify-center">
          <div className="flex">
            <input
              type="checkbox"
              name="BackFilling"
              value="Done Properly"
              checked={formData.BackFilling === "Done Properly"}
              onChange={handleChange}
              className="form-checkbox"
            />
            <span className="ml-2">Done Properly</span>
          </div>
        </label>
        <label className="grid grid-cols-1 items-center justify-center">
          <div className="flex">
            <input
              type="checkbox"
              name="BackFilling"
              value="Not Done Properly"
              checked={formData.BackFilling === "Not Done Properly"}
              onChange={handleChange}
              className="form-checkbox"
            />
            <span className="ml-2">Not Done Properly</span>
          </div>
        </label>
        <label className="grid grid-cols-1 items-center justify-center">
          <div className="flex">
            <input
              type="checkbox"
              name="BackFilling"
              value="Not Applicable"
              checked={formData.BackFilling === "Not Applicable"}
              onChange={handleChange}
              className="form-checkbox"
            />
            <span className="ml-2">Not Applicable</span>
          </div>
        </label>
      </td>
      <td className="border border-gray-300 p-2">
        <textarea
          name="remarks15"
          value={formData.remarks15}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none"
        />
      </td>
    </tr>

    <tr>
      <td className="border border-gray-300 p-2">16</td>
      <td className="border border-gray-300 p-2">
        General feel of the tower after strengthening
      </td>
      <td className="border border-gray-300 p-2">
        <label className="grid grid-cols-1 items-center justify-center">
          <div className="flex">
            <input
              type="checkbox"
              name="GeneralFeel"
              value="Good"
              checked={formData.GeneralFeel === "Good"}
              onChange={handleChange}
              className="form-checkbox"
            />
            <span className="ml-2">Good</span>
          </div>
        </label>
        <label className="grid grid-cols-1 items-center justify-center">
          <div className="flex">
            <input
              type="checkbox"
              name="GeneralFeel"
              value="Poor"
              checked={formData.GeneralFeel === "Poor"}
              onChange={handleChange}
              className="form-checkbox"
            />
            <span className="ml-2">Poor</span>
          </div>
        </label>
        <label className="grid grid-cols-1 items-center justify-center">
          <div className="flex">
            <input
              type="checkbox"
              name="GeneralFeel"
              value="Average"
              checked={formData.GeneralFeel === "Average"}
              onChange={handleChange}
              className="form-checkbox"
            />
            <span className="ml-2">Average</span>
          </div>
        </label>
        <label className="grid grid-cols-1 items-center justify-center">
          <div className="flex">
            <input
              type="checkbox"
              name="GeneralFeel"
              value="Cant Say"
              checked={formData.GeneralFeel === "Cant Say"}
              onChange={handleChange}
              className="form-checkbox"
            />
            <span className="ml-2">Cant Say</span>
          </div>
        </label>
      </td>
      <td className="border border-gray-300 p-2">
        <textarea
          name="remarks16"
          value={formData.remarks16}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none"
        />
      </td>
    </tr>                                                    
  </thead>
</table>

 {/* section 5 */}
 <table className="w-full border-collapse border border-gray-400">
            <thead>
              <tr className="bg-gray-200">
                <td
                  colSpan="5"
                  className="border border-gray-300 p-2 font-bold"
                >
                  Additional Work done at site
                </td>
              </tr>
              <tr>
                <th className="border border-gray-300 p-2">III</th>
                <th className="border border-gray-300 p-2">
                  Describe the additional work done details.
                </th>
              </tr>
              <td className="font-semibold text-lg">Punch Points:</td>
              <td className="border border-gray-300 p-2">
                <textarea
                  rows={16}
                  name="remarks17"
                  value={formData.remarks17}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none"
                />
              </td>
            </thead>
          </table>
</div>
        </div>

        <div className="mt-6 flex justify-center">
          <button
            type="submit"
            className="px-6 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? (
              <span>
                Generating PDF... <i className="fas fa-spinner fa-spin" />
              </span>
            ) : (
              "Generate PDF"
            )}
          </button>




        </div>
      </form>
    </div>
  );
};

export default Format;
