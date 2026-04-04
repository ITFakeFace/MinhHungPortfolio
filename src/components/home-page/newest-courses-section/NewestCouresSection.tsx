"use client";
import styles from "./NewestCoursesSection.module.scss";
import NewestCourseText from "@/assets/home-page/text/NewestCourseText-1.png";
import NewestCourseTextEN from "@/assets/home-page/text/NewestCourseTextEN-1.png";
import ProgramText from "@/assets/home-page/text/ProgramText-1.png";
import ProgramTextEN from "@/assets/home-page/text/ProgramTextEN-1.png";
import Plan4ModuleText from "@/assets/home-page/text/Plan4ModuleText-1.png";
import Plan4ModuleTextEN from "@/assets/home-page/text/Plan4ModuleTextEN-1.png";
import ConquerMarketText from "@/assets/home-page/text/WeaponConquerMarketText-1.png";
import ConquerMarketTextEN from "@/assets/home-page/text/WeaponConquerMarketTextEN-1.png";
import SolutionText from "@/assets/home-page/text/SolutionText-1.png";
import SolutionTextEN from "@/assets/home-page/text/SolutionTextEN-1.png";
import CoursePackText from "@/assets/home-page/text/CoursePackText-1.png";
import CoursePackTextEN from "@/assets/home-page/text/CoursePackTextEN-1.png";
import ExploreCourseText from "@/assets/home-page/text/ExploreCourseText-1.png";
import ExploreCourseTextEN from "@/assets/home-page/text/ExploreCourseTextEN-1.png";
import MsHung from "@/assets/home-page/assets/NewestCourseMsHung-1.png";
import MsHungEN from "@/assets/home-page/assets/NewestCourseMsHungEN-1.png";
import WeaponConquerMarket from "@/assets/home-page/assets/WeaponConquerMarket-1.png";
import SolutionImage from "@/assets/home-page/assets/SolutionImage-1.png";
import EventLinkedInImage from "@/assets/home-page/assets/EventLinkedIn-1.png";
import CourseBookImage from "@/assets/home-page/assets/CourseBookImage-1.png";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { Button } from "primereact/button";

const NewestCouresSection = () => {
  const { lang } = useLanguage();
  const TargetStyles: Record<string, string> = {
    // Container: Co giãn chiều rộng từ 95% (mobile) về 50% (desktop)
    // Padding và Gap cũng dùng clamp để tự nở ra trên màn 2K
    container:
      "flex flex-col mx-auto justify-center items-center " +
      "w-[clamp(92%,85%+2vw,50%)] " +
      "bg-linear-to-tr from-[#FFFCA7] to-[#FFFEDA] " +
      "border-3 border-[#7F8B1E] rounded-3xl lg:rounded-4xl " +
      "p-[clamp(0.75rem,1vw,1.5rem)] " +
      "gap-[clamp(0.25rem,0.5vw,1rem)] shadow-lg",

    // Title: Scale từ 20px (mobile) lên 30px (2K)
    title:
      "font-bold italic text-center text-[#996205] " +
      "text-[clamp(1.25rem,1rem+1.5vw,2.25rem)] mb-1 lg:mb-2",

    // Content: Scale từ 14px (mobile) lên 22px (2K)
    content:
      "text-center italic text-[#2C3B0D] leading-relaxed " +
      "text-[clamp(0.875rem,0.75rem+0.8vw,1.5rem)] mb-2",
  };
  const GrowthSolverStyles: Record<string, string> = {
    // Container: Giữ nguyên màu sắc của bạn, thêm padding linh hoạt
    container:
      "px-4 py-3 lg:px-6 lg:py-5 bg-[#1D1F0D] border-2 border-[#CA8607] rounded-3xl mb-4 shadow-lg ",

    // Title: Kết hợp Gradient "Vàng Kim" của bạn với Clamp co giãn
    // Giải thích: Min 24px (1.5rem) -> Max 40px (2.5rem)
    title:
      "font-bold leading-relaxed bg-linear-[to_right,#be8b05_0%,#fae14a_25%,#be8b05_50%,#fae14a_100%] bg-clip-text text-transparent " +
      "text-[clamp(1.5rem,1.2rem+1.5vw,2.5rem)] mb-1 lg:mb-2",

    // Content: Kết hợp text-md/xl của bạn thành dải co giãn
    // Giải thích: Min 16px (1rem) -> Max 24px (1.5rem)
    content:
      "text-white/90 leading-relaxed " +
      "text-[clamp(1rem,0.9rem+0.5vw,1.5rem)]!",
  };
  // const Plan4ModuleStyles: Record<string, string> = {
  //   container:
  //     "bg-linear-to-tr from-[#FFFCA7] to-[#FFFEDA] text-[#2C3B0D] h-full " +
  //     "border-4 border-[#2C3B0D] rounded-4xl p-5 shadow-lg flex flex-col ", // Bỏ w-full!
  //   indexTitle: "text-[#CA8607] font-bold text-xl lg:text-4xl mb-2 text-center", // Giảm size cho cân đối
  //   title: "text-lg lg:text-3xl font-extrabold text-center mb-3 leading-tight", // Giảm size 3xl -> xl
  //   subtitle: "italic text-lg text-center mb-4 block",
  //   contentTitle: "font-bold text-[#2C3B0D] text-2xl mt-2",
  //   contentList: "list-disc list-inside pl-5 text-xl space-y-1 mb-3",
  // };

  const Plan4ModuleStyles: Record<string, string> = {
    // Container: Dùng h-full để các box cao bằng nhau trong Grid cha
    container:
      "bg-linear-to-tr from-[#FFFCA7] to-[#FFFEDA] text-[#2C3B0D] h-full " +
      "border-4 border-[#2C3B0D] rounded-4xl p-3 shadow-lg " +
      "flex flex-col gap-4",

    // Module Index (MODULE 1, 2, 3)
    indexTitle:
      "text-[#CA8607] font-bold text-center " +
      "text-[clamp(1rem,1rem+1.5vw,2rem)]", // 20px -> 40px

    // Title: Ép chiều cao tối thiểu để các title luôn chiếm không gian bằng nhau
    title:
      "font-extrabold text-center leading-tight text-[#2C3B0D] " +
      "text-[clamp(1.5rem,0.9rem+1.2vw,1.75rem)] " + // 18px -> 32px
      "min-h-[4rem] flex items-center justify-center text-balance", // Đảm bảo title luôn chiếm ít nhất 4rem chiều cao, và dùng text-balance để căn chỉnh đẹp

    // Subtitle
    subtitle:
      "italic text-center block opacity-90 " +
      "text-[clamp(1.25rem,0.75rem+0.5vw,1.5rem)] " + // 14px -> 18px
      "min-h-[3.5rem] flex items-start justify-center",

    // Section (Kết quả, Nội dung, Đối tượng)
    // Mỗi section này sẽ có min-h để đẩy các phần dưới xuống đều nhau
    sectionWrapper: "flex-1 flex flex-col gap-4",

    contentTitle:
      "font-bold text-[#2C3B0D] " +
      "text-[clamp(1.5rem,0.8rem+0.8vw,1.75rem)] mb-2 lg:mb-0", // 16px -> 24px

    contentList:
      "list-disc list-outside pl-5 space-y-1 " +
      "text-[clamp(1.3rem,0.8rem+0.4vw,1.75rem)]", // 14px -> 20px
    module4OrderedContentTitle:
      "font-bold mb-2 " +
      "inline " + // Ép thành khối chiếm hết chiều ngang để chữ tự xuống dòng
      "break-words! whitespace-normal! " + // Cho phép ngắt từ và xuống dòng bình thường
      "leading-tight text-center lg:text-left", // Căn lề cho đẹp
    module4OrderedContentList:
      "[&>li]:border-[#CA8607] [&>li>ul]:pl-5! [&>li]:border-r-2 lg:[&>li]:border-r-4 [&>li:last-child]:border-r-2 lg:[&>li:last-child]:border-r-0 " +
      "list-decimal list-inside! space-y-1 grid! grid-cols-1 lg:grid-cols-5 items-start justify-items-stretch gap-y-5 lg:gap-y-0 " +
      "marker:font-bold text-[clamp(1.5rem,0.8rem+0.4vw,1.75rem)]",
    module4UnorderedContentList:
      "list-disc list-outside! pl-2! space-y-1 " +
      "text-[clamp(1.5rem,0.8rem+0.4vw,1.75rem)] marker:text-black",
    module4OrderedContentItem:
      "border-r border-[#2C3B0D/20] last:border-r-0 px-1 lg:px-3 h-full",

    // Phần đối tượng (Luôn nằm dưới cùng và thẳng hàng)
    targetSection: "mt-auto pt-4 border-t border-[#2C3B0D/20] min-h-[120px]",
  };

  const CoursePackStyles: Record<string, string> = {
    container:
      "bg-linear-to-tr from-[#FFFCA7] to-[#FFFEDA] text-[#2C3B0D] h-full " +
      "border-4 border-[#2C3B0D] rounded-4xl p-3 shadow-lg " +
      "flex flex-col gap-2 lg:gap-4",
    indexTitle:
      "text-[#CA8607] font-bold text-center " +
      "text-[clamp(1rem,1rem+1.5vw,2rem)]", // 20px -> 40px
    title:
      "font-extrabold text-center leading-tight text-[#2C3B0D] " +
      "text-[clamp(1.25rem,0.9rem+1.2vw,2rem)] " + // 18px -> 32px
      "min-h-[3rem] lg:min-h-[4.15rem] flex items-start justify-center",
    contentBox: "min-h-[8.5rem] lg:min-h-[12.5rem]",
    key: "font-bold text-[clamp(1.5rem,0.75rem+0.5vw,1.65rem)]",
    content: "font-normal text-[clamp(1.3rem,0.75rem+0.5vw,1.5rem)]",
  };

  return (
    <div className={`${styles.container} w-full`}>
      <Image
        src={lang == "Viet" ? NewestCourseText : NewestCourseTextEN}
        alt="Newest Course Text"
        className={`w-7/10 mx-auto my-20`}
      />
      <div
        className={`bg-black/40 border-2 border-[#8D7234] rounded-4xl lg:rounded-[130px] w-19/20 mx-auto flex flex-col gap-4 lg:gap-15! py-5 lg:py-20! text-white`}
      >
        <Image
          src={lang == "Viet" ? ProgramText : ProgramTextEN}
          alt="Program Text"
          className={`w-9/10 lg:w-4/5 mx-auto`}
        />
        <div
          className={`mx-auto text-[0.725rem] lg:text-[45px]! italic font-light`}
        >
          (From In-Store Execution to Strategic Planning)
        </div>

        {/* Target Boxes */}
        <div
          className={`flex flex-col lg:flex-row! w-9/10 mx-auto gap-3 lg:gap-20!`}
        >
          <div className={`${TargetStyles.container}`}>
            <div className={`${TargetStyles.title}`}>
              {lang == "Viet" ? "ĐỊNH VỊ KHOÁ HỌC" : "COURSE POSITIONING"}
            </div>
            <div className={`${TargetStyles.content}`}>
              {lang == "Viet"
                ? "Lập thành công kế hoạch tăng trưởng và thực thi "
                : "Successfully build and execute a growth plan "}
              <span className={`font-bold`}>
                {lang == "Viet" ? "TRONG 12 THÁNG" : "WITHIN 12 MONTHS"}
              </span>
            </div>
          </div>
          <div className={`${TargetStyles.container}`}>
            <div className={`${TargetStyles.title}`}>
              {lang == "Viet"
                ? "LỘ TRÌNH PHÁT TRIỂN SỰ NGHIỆP CHUẨN CHUYÊN GIA"
                : "PROFESSIONAL CAREER DEVELOPMENT PATHWAY"}
            </div>
            <div className={`${TargetStyles.content}`}>
              {lang == "Viet"
                ? "Modern Trade & Go-To-Market Strategist AOP & Commercial Planning Expert"
                : "Modern Trade & Go-To-Market Strategist AOP & Commercial Planning Expert"}
            </div>
          </div>
        </div>

        {/* Growth Solver Boxes */}
        <div className={`flex flex-col lg:flex-row w-9/10 mx-auto gap-3`}>
          <Image
            src={lang == "Viet" ? MsHung : MsHungEN}
            alt="Ms. Hung"
            className={`w-full h-auto lg:w-1/2! mx-auto object-contain`}
          />
          <div
            className={`flex flex-col gap-2 lg:gap-5 w-full lg:w-1/2! mx-auto mt-0 lg:mt-5 px-0 lg:px-5`}
          >
            <div
              className={`font-bold text-2xl lg:text-5xl! text-center text-balance`}
            >
              {lang == "Viet"
                ? "NGƯỜI GIẢI BÀI TOÁN TĂNG TRƯỞNG"
                : "THE GROWTH PROBLEM SOLVER"}
            </div>
            <div className={`${GrowthSolverStyles.container}`}>
              <div className={`${GrowthSolverStyles.title}`}>
                {lang == "Viet" ? "THỰC CHIẾN" : "HANDS-ON EXPERIENCE"}
              </div>
              <div className={`${GrowthSolverStyles.content}`}>
                <span className={`font-bold`}>
                  {lang == "Viet"
                    ? "18+ năm kinh nghiệm "
                    : "Over 18 years of proven, "}
                </span>
                {lang == "Viet"
                  ? "“cọ xát” trực tiếp tại các tập đoàn FMCG đa quốc gia và Việt Nam"
                  : "hands-on experience working directly with multinational and Vietnamese FMCG corporations."}
              </div>
            </div>
            <div className={`${GrowthSolverStyles.container}`}>
              <div className={`${GrowthSolverStyles.title}`}>
                {lang == "Viet" ? "LĨNH VỰC TRỌNG TÂM" : "PROFESSIONAL RECORD"}
              </div>
              <div className={`${GrowthSolverStyles.content}`}>
                {lang == "Viet"
                  ? "Từng giữ các vị trí quản lý then chốt tại "
                  : "Held key leadership positions at leading organizations including "}
                <span className={`font-bold`}>
                  {lang == "Viet"
                    ? "Coca - Cola, Nestlé, Tân Hiệp Phát, Mesa Group."
                    : "Coca - Cola, Nestlé, Tân Hiệp Phát, and Mesa Group."}
                </span>
              </div>
            </div>
            <div className={`${GrowthSolverStyles.container}`}>
              <div className={`${GrowthSolverStyles.title}`}>
                {lang == "Viet" ? "DẤU ẤN CHUYÊN MÔN" : "CORE EXPERTISE"}
              </div>
              <div className={`${GrowthSolverStyles.content}`}>
                <span className={`font-bold`}>
                  <ul className={`list-disc list-outside pl-3`}>
                    <li>Modern Trade Excellence</li>
                    <li>Key Account Management</li>
                    <li>Go - To - Market Strategy</li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Module Plan */}
        <div className="flex flex-col gap-3 w-full">
          <Image
            src={lang == "Viet" ? Plan4ModuleText : Plan4ModuleTextEN}
            alt="Plan 4 Module Text"
            className={`w-9/10 lg:w-4/5 mx-auto mt-5`}
          />
          <div
            className={`grid! grid-cols-1 md:grid-cols-3 gap-4 items-center justify-center mt-3 lg:mt-8 mx-5`}
          >
            {/* MODULE 1 */}
            <div className={`${Plan4ModuleStyles.container}`}>
              <div className={`lg:min-h-[150px]! xl:min-h-[250px]`}>
                <div className={`${Plan4ModuleStyles.indexTitle}`}>
                  MODULE 1:
                </div>
                <div className={`${Plan4ModuleStyles.title}`}>
                  {lang == "Viet"
                    ? "MODERN TRADE EXCELLENCE (FOUNDATION) TỪ HIỆN DIỆN ĐẾN DOANH SỐ"
                    : "MODERN TRADE EXCELLENCE (FOUNDATION) FROM IN-STORE PRESENCE TO SALES PERFORMANCE"}
                </div>
              </div>
              <div className={`${Plan4ModuleStyles.subtitle}`}>
                {lang == "Viet"
                  ? "Phương pháp chiến thắng tại điểm bán (Point of Sale) – Nơi quyết định 70% doanh số FMCG"
                  : "Winning strategies at the Point of Sale (POS) – where up to 70% of FMCG revenue is generated"}
              </div>
              <div>
                <div className={`${Plan4ModuleStyles.contentTitle}`}>
                  {lang == "Viet" ? "Kết quả đạt được:" : "Learning Outcomes:"}
                </div>
                <ul className={`${Plan4ModuleStyles.contentList}`}>
                  <li>
                    {lang == "Viet"
                      ? "Hiểu đúng “cuộc chơi” MT"
                      : "Understand the dynamics of Modern Trade channels"}
                  </li>
                  <li>
                    {lang == "Viet"
                      ? "Nắm vững cách chiến thắng tại điểm bán"
                      : "Master in-store execution strategies"}
                  </li>
                </ul>
              </div>
              <div className="min-h-0 md:min-h-[230px]">
                <div className={`${Plan4ModuleStyles.contentTitle}`}>
                  {lang == "Viet" ? "Nội dung chính:" : "Key Topics:"}
                </div>
                <ul className={`${Plan4ModuleStyles.contentList}`}>
                  <li>
                    {lang == "Viet"
                      ? "Hiểu bản chất Modern Trade (MT) tại Việt Nam"
                      : "Overview of Modern Trade (MT) in Vietnam"}
                  </li>
                  <li>
                    {lang == "Viet"
                      ? "KPI quan trọng: Numeric - Distribution, Weighted Distribution, Share of Shelf"
                      : "Critical KPIs: Numeric Distribution, Weighted Distribution, Share of Shelf"}
                  </li>
                  <li>
                    {lang == "Viet"
                      ? "Chuẩn hóa Perfect Store Model"
                      : "Perfect Store Model standards"}
                  </li>
                  <li>
                    {lang == "Viet"
                      ? "Thực chiến trưng bày: planogram, POSM, visibility"
                      : "Execution excellence: planogram, POSM, visibility"}
                  </li>
                  <li>
                    {lang == "Viet"
                      ? "Cách audit & nâng hiệu suất từng outlet"
                      : "Outlet audit & performance improvement"}
                  </li>
                </ul>
              </div>
              <div>
                <div className={`${Plan4ModuleStyles.contentTitle}`}>
                  {lang == "Viet" ? "Đối tượng:" : "Target Audience:"}
                </div>
                <ul className={`${Plan4ModuleStyles.contentList}`}>
                  <li>
                    {lang == "Viet"
                      ? "Sales Supervisor / ASM"
                      : "Sales Supervisor / ASM"}
                  </li>
                  <li>
                    {lang == "Viet" ? "Trade Marketing" : "Trade Marketing"}
                  </li>
                  <li>
                    {lang == "Viet" ? "Brand Team làm MT" : "Brand Team in MT"}
                  </li>
                </ul>
              </div>
            </div>
            {/* MODULE 2 */}
            <div className={`${Plan4ModuleStyles.container}`}>
              <div className={`lg:min-h-[150px]! xl:min-h-[250px]`}>
                <div className={`${Plan4ModuleStyles.indexTitle}`}>
                  MODULE 2:
                </div>
                <div className={`${Plan4ModuleStyles.title}`}>
                  {lang == "Viet"
                    ? "KEY ACCOUNT MASTERY CHỐT DEAL LỚN VÀ XÂY DỰNG QUAN HỆ CHIẾN LƯỢC"
                    : "KEY ACCOUNT MASTERY WINNING BIG DEALS AND BUILDING STRATEGIC PARTNERSHIPS"}
                </div>
              </div>
              <div className={`${Plan4ModuleStyles.subtitle}`}>
                {lang == "Viet"
                  ? "Tập trung nhóm khách hàng lớn (Big Accounts) - Không chỉ bán hàng mà còn “đi deal & giữ deal”"
                  : "Focus on Big Accounts – moving beyond “closing deals” to “winning and sustaining deals”"}
              </div>
              <div>
                <div className={`${Plan4ModuleStyles.contentTitle}`}>
                  {lang == "Viet" ? "Kết quả đạt được:" : "Learning Outcomes:"}
                </div>
                <ul className={`${Plan4ModuleStyles.contentList}`}>
                  <li>
                    {lang == "Viet"
                      ? "Biết làm việc với buyer và chuỗi lớn"
                      : "Effectively work with buyers and retail chains"}
                  </li>
                  <li>
                    {lang == "Viet"
                      ? "Tăng khả năng chốt deal và giữ margin"
                      : "Drive sales growth while protecting margins"}
                  </li>
                </ul>
              </div>
              <div className="min-h-0 md:min-h-[230px]">
                <div className={`${Plan4ModuleStyles.contentTitle}`}>
                  {lang == "Viet" ? "Nội dung chính:" : "Key Topics:"}
                </div>
                <ul className={`${Plan4ModuleStyles.contentList}`}>
                  <li>
                    {lang == "Viet"
                      ? "KAM mindset vs Sales truyền thống"
                      : "KAM mindset vs. traditional sales approach"}
                  </li>
                  <li>
                    {lang == "Viet"
                      ? "Xây dựng Account Plan chiến lược"
                      : "Strategic Account Planning"}
                  </li>
                  <li>
                    {lang == "Viet"
                      ? "Kỹ thuật negotiation win-win nhưng vẫn protect margin"
                      : "Advanced negotiation techniques for win-win outcsomes and margin protection"}
                  </li>
                  <li>
                    {lang == "Viet"
                      ? "Quản lý trade terms, listing fee, promotion"
                      : "Trade terms management: listing fees, promotions"}
                  </li>
                  <li>
                    {lang == "Viet"
                      ? "Xử lý conflict với buyer"
                      : "Conflict resolution with buyers"}
                  </li>
                </ul>
              </div>
              <div>
                <div className={`${Plan4ModuleStyles.contentTitle}`}>
                  {lang == "Viet" ? "Đối tượng:" : "Target Audience:"}
                </div>
                <ul className={`${Plan4ModuleStyles.contentList}`}>
                  <li>
                    {lang == "Viet"
                      ? "Đối tác/ người học có ý định tiếp cận nhóm khách hàng lớn (Big Accounts)"
                      : "Professionals targeting Big Accounts"}
                  </li>
                  <li>
                    {lang == "Viet"
                      ? "Key Account Executive / Manager"
                      : "Key Account Executives / Managers"}
                  </li>
                  <li>{lang == "Viet" ? "Sales Manager" : "Sales Manager"}</li>
                  <li>
                    {lang == "Viet"
                      ? "Business Owner làm việc với siêu thị / chuỗi"
                      : "Business Owners working with modern trade chains"}
                  </li>
                </ul>
              </div>
            </div>
            {/* MODULE 3 */}
            <div className={`${Plan4ModuleStyles.container}`}>
              <div
                className={`min-h-0 lg:min-h-[150px] xl:min-h-[250px] 2xl:min-h-[200px]`}
              >
                <div className={`${Plan4ModuleStyles.indexTitle}`}>
                  MODULE 3:
                </div>
                <div className={`${Plan4ModuleStyles.title}`}>
                  {lang == "Viet"
                    ? "GO-TO-MARKET AND DISTRIBUTION GO-TO-MARKET THỰC CHIẾN"
                    : "GO-TO-MARKET AND DISTRIBUTION EXECUTING EFFECTIVE MARKET EXPANSION STRATEGIES"}
                </div>
              </div>
              <div className={`${Plan4ModuleStyles.subtitle}`}>
                {lang == "Viet"
                  ? "Chiến lược khai mở thị trường, xây hệ thống phân phối và gia tăng doanh số"
                  : "Market expansion, distribution system development, and sustainable revenue growth"}
              </div>
              <div>
                <div className={`${Plan4ModuleStyles.contentTitle}`}>
                  {lang == "Viet" ? "Kết quả đạt được:" : "Learning Outcomes:"}
                </div>
                <ul className={`${Plan4ModuleStyles.contentList}`}>
                  <li>
                    {lang == "Viet"
                      ? "Xây được hệ thống phân phối phù hợp"
                      : "Build an effective distribution system"}
                  </li>
                  <li>
                    {lang == "Viet"
                      ? "Biết mở rộng thị trường hiệu quả"
                      : "Expand market coverage and drive revenue growt"}
                  </li>
                </ul>
              </div>
              <div className="min-h-0 md:min-h-[230px]">
                <div className={`${Plan4ModuleStyles.contentTitle}`}>
                  {lang == "Viet" ? "Nội dung chính:" : "Key Topics:"}
                </div>
                <ul className={`${Plan4ModuleStyles.contentList}`}>
                  <li>
                    {lang == "Viet"
                      ? "Thiết kế Go-To-Market Model (GTM)"
                      : "Go-To-Market (GTM) model design"}
                  </li>
                  <li>
                    {lang == "Viet"
                      ? "Chọn kênh: GT – MT – Ecom – Horeca"
                      : "Channel strategy: GT – MT – E-commerce – Horeca"}
                  </li>
                  <li>
                    {lang == "Viet"
                      ? "Xây dựng & quản lý Distributor"
                      : "Distributor setup and management"}
                  </li>
                  <li>
                    {lang == "Viet"
                      ? "Route-to-Market & coverage"
                      : "Route-to-market & coverage planning"}
                  </li>
                  <li>
                    {lang == "Viet"
                      ? "Case thực tế Việt Nam (đặc biệt FMCG & beverage)"
                      : "Vietnam market case studies (FMCG focus)"}
                  </li>
                </ul>
              </div>
              <div>
                <div className={`${Plan4ModuleStyles.contentTitle}`}>
                  {lang == "Viet" ? "Đối tượng:" : "Target Audience:"}
                </div>
                <ul className={`${Plan4ModuleStyles.contentList}`}>
                  <li>{lang == "Viet" ? "Founder / SME" : "Founder / SME"}</li>
                  <li>{lang == "Viet" ? "Founder / SME" : "Founder / SME"}</li>
                  <li>
                    {lang == "Viet"
                      ? "Head of Sales / GTM"
                      : "Head of Sales / GTM"}
                  </li>
                </ul>
              </div>
            </div>
            {/* MODULE 4 */}
            <div className={`${Plan4ModuleStyles.container} lg:col-span-3 `}>
              <div
                className={`min-h-0 lg:min-h-[80px] xl:min-h-[250px] 2xl:min-h-[50px]`}
              >
                <div className={`${Plan4ModuleStyles.indexTitle}`}>
                  MODULE 4: PREMIUM
                </div>
                <div className={`${Plan4ModuleStyles.title}`}>
                  {lang == "Viet"
                    ? "AOP FOR MODERN TRADE - ĐIỂM KHÁC BIỆT ĐẮT GIÁ"
                    : "AOP FOR MODERN TRADE - THE KEY DIFFERENTIATOR"}
                </div>
              </div>
              <div className={`${Plan4ModuleStyles.subtitle}`}>
                {lang == "Viet"
                  ? "“Premium Module” - Chinh phục giá bán cao"
                  : "“Premium Module” – Mastering Premium Pricing Strategies"}
              </div>
              <div className={`pl-1 lg:pl-5`}>
                <div className={`${Plan4ModuleStyles.contentTitle}`}>
                  Kết quả đạt được
                </div>
                <ul className={`${Plan4ModuleStyles.contentList}`}>
                  <li>
                    {lang == "Viet"
                      ? "Học viên tự xây dựng được AOP 12 tháng cho MT"
                      : "Học viên tự xây dựng được AOP 12 tháng cho MT"}
                  </li>
                  <li>
                    {lang == "Viet"
                      ? "Có thể phân tích và đưa ra chiến lược Execution → Target → Budget → ROI"
                      : "Có thể phân tích và đưa ra chiến lược Execution → Target → Budget → ROI"}
                  </li>
                </ul>
              </div>
              <div className="min-h-0 md:min-h-[230px] pl-1 lg:pl-5">
                <div className={`${Plan4ModuleStyles.contentTitle}`}>
                  Nội dung chính:
                </div>
                <ol
                  className={`${Plan4ModuleStyles.module4OrderedContentList} `}
                >
                  {/* MODULE 4: Content 1 */}
                  <li
                    className={`${Plan4ModuleStyles.module4OrderedContentItem}`}
                  >
                    <div
                      className={`${Plan4ModuleStyles.module4OrderedContentTitle}`}
                    >
                      {lang == "Viet"
                        ? "AOP Framework: Chuẩn Corporate"
                        : "AOP Framework: Chuẩn Corporate"}
                    </div>
                    <ul
                      className={`${Plan4ModuleStyles.module4UnorderedContentList} `}
                    >
                      <li>
                        {lang == "Viet"
                          ? "Sales Target (Volume/ Value)"
                          : "Sales Target (Volume/ Value)"}
                      </li>
                      <li>
                        {lang == "Viet"
                          ? "Channel Target (MT vs GT vs Others)"
                          : "Channel Target (MT vs GT vs Others)"}
                      </li>
                      <li>
                        {lang == "Viet"
                          ? "Key Account Target"
                          : "Key Account Target"}
                      </li>
                      <li>
                        {lang == "Viet" ? "SKU strategy" : "SKU strategy"}
                      </li>
                    </ul>
                  </li>
                  {/* MODULE 4: Content 2 */}
                  <li
                    className={`${Plan4ModuleStyles.module4OrderedContentItem}`}
                  >
                    <div
                      className={`${Plan4ModuleStyles.module4OrderedContentTitle}`}
                    >
                      {lang == "Viet"
                        ? "Forecast & Planning"
                        : "Forecast & Planning"}
                    </div>
                    <ul
                      className={`${Plan4ModuleStyles.module4UnorderedContentList} `}
                    >
                      <li>
                        {lang == "Viet"
                          ? "Demand planning theo mùa vụ"
                          : "Demand planning theo mùa vụ"}
                      </li>
                      <li>
                        {lang == "Viet"
                          ? "Promotion calendar"
                          : "Promotion calendar"}
                      </li>
                      <li>
                        {lang == "Viet"
                          ? "Listing & expansion plan"
                          : "Listing & expansion plan"}
                      </li>
                    </ul>
                  </li>
                  {/* MODULE 4: Content 3 */}
                  <li
                    className={`${Plan4ModuleStyles.module4OrderedContentItem}`}
                  >
                    <div
                      className={`${Plan4ModuleStyles.module4OrderedContentTitle}`}
                    >
                      {lang == "Viet"
                        ? "AOP Framework: Chuẩn Corporate"
                        : "AOP Framework: Chuẩn Corporate"}
                    </div>
                    <ul
                      className={`${Plan4ModuleStyles.module4UnorderedContentList} `}
                    >
                      <li>
                        {lang == "Viet"
                          ? "Sales Target (Volume/ Value)"
                          : "Sales Target (Volume/ Value)"}
                      </li>
                      <li>
                        {lang == "Viet"
                          ? "Channel Target (MT vs GT vs Others)"
                          : "Channel Target (MT vs GT vs Others)"}
                      </li>
                      <li>
                        {lang == "Viet"
                          ? "Key Account Target"
                          : "Key Account Target"}
                      </li>
                      <li>
                        {lang == "Viet" ? "SKU strategy" : "SKU strategy"}
                      </li>
                    </ul>
                  </li>
                  {/* MODULE 4: Content 4 */}
                  <li
                    className={`${Plan4ModuleStyles.module4OrderedContentItem}`}
                  >
                    <div
                      className={`${Plan4ModuleStyles.module4OrderedContentTitle}`}
                    >
                      {lang == "Viet"
                        ? "AOP Framework: Chuẩn Corporate"
                        : "AOP Framework: Chuẩn Corporate"}
                    </div>
                    <ul
                      className={`${Plan4ModuleStyles.module4UnorderedContentList} `}
                    >
                      <li>
                        {lang == "Viet"
                          ? "Sales Target (Volume/ Value)"
                          : "Sales Target (Volume/ Value)"}
                      </li>
                      <li>
                        {lang == "Viet"
                          ? "Channel Target (MT vs GT vs Others)"
                          : "Channel Target (MT vs GT vs Others)"}
                      </li>
                      <li>
                        {lang == "Viet"
                          ? "Key Account Target"
                          : "Key Account Target"}
                      </li>
                      <li>
                        {lang == "Viet" ? "SKU strategy" : "SKU strategy"}
                      </li>
                    </ul>
                  </li>
                  {/* MODULE 4: Content 5 */}
                  <li
                    className={`${Plan4ModuleStyles.module4OrderedContentItem}`}
                  >
                    <div
                      className={`${Plan4ModuleStyles.module4OrderedContentTitle}`}
                    >
                      {lang == "Viet"
                        ? "AOP Framework: Chuẩn Corporate"
                        : "AOP Framework: Chuẩn Corporate"}
                    </div>
                    <ul
                      className={`${Plan4ModuleStyles.module4UnorderedContentList} `}
                    >
                      <li>
                        {lang == "Viet"
                          ? "Sales Target (Volume/ Value)"
                          : "Sales Target (Volume/ Value)"}
                      </li>
                      <li>
                        {lang == "Viet"
                          ? "Channel Target (MT vs GT vs Others)"
                          : "Channel Target (MT vs GT vs Others)"}
                      </li>
                      <li>
                        {lang == "Viet"
                          ? "Key Account Target"
                          : "Key Account Target"}
                      </li>
                      <li>
                        {lang == "Viet" ? "SKU strategy" : "SKU strategy"}
                      </li>
                    </ul>
                  </li>
                </ol>
              </div>
              <div
                className={`flex flex-col lg:flex-row gap-3 lg:gap-50 justify-center items-center mt-10`}
              >
                <Button
                  unstyled
                  className={`bg-[linear-gradient(to_right,#4C5409_0%,#4C5409_74%,#B0B266_100%)] py-3 px-10 rounded-4xl text-white text-2xl lg:text-5xl font-bold hover:cursor-pointer`}
                  label={
                    lang == "Viet"
                      ? "TÌM HIỂU TRỌN KHÓA HỌC"
                      : "EXPLORE THE COURSE MORE"
                  }
                />
                <Button
                  unstyled
                  className={`bg-[linear-gradient(to_right,#4C5409_0%,#4C5409_74%,#B0B266_100%)] py-3 px-10 rounded-4xl text-white text-2xl lg:text-5xl font-bold hover:cursor-pointer`}
                  label={lang == "Viet" ? "ĐĂNG KÝ NGAY" : "ENROLL NOW"}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Market Conquering Weapon Box */}
        <div>
          <Image
            src={lang == "Viet" ? ConquerMarketText : ConquerMarketTextEN}
            alt="Market Conquering Weapon Text"
            className={`w-9/10 lg:w-4/5 mx-auto mt-10`}
          />
          <div
            className={`mx-auto text-[0.725rem] lg:text-[45px]! text-center italic font-light w-9/10 lg:w-4/5 mt-3 lg:mt-5 mb-10 lg:mb-15!`}
          >
            {lang == "Viet"
              ? "Trao tay bí kíp, hướng dẫn thực thi cho đến khi thành công"
              : "Providing proven blueprints and execution guidance to ensure your ultimate success."}
          </div>
          <FloatingHero />
        </div>
        <div className={`flex flex-col`}>
          <div
            className={`mx-auto text-[1.25rem] lg:text-[45px]! text-center italic font-light mb-3 lg:mb-5 mt-15`}
          >
            {lang == "Viet"
              ? "Team bạn đang làm MT rất chăm…"
              : "Your team is working hard in Modern Trade..."}
            <br></br>
            {lang == "Viet"
              ? " nhưng doanh số không bền."
              : " yet sales remain inconsistent."}
          </div>
          <div
            className={`w-9/10 mx-auto bg-[#040404] border-[#EEDA66] border-2 rounded-[60px] lg:rounded-[118px] flex flex-col lg:flex-row`}
          >
            <div className="w-full lg:w-1/2! p-4 lg:p-12! flex flex-col justify-center items-center text-left lg:text-left gap-5">
              <Image
                src={lang == "Viet" ? SolutionText : SolutionTextEN}
                alt="Market Conquering Weapon Text"
                className="w-full lg:w-4/5 mx-auto mt-2 lg:mt-10"
              />

              {/* Phần tiêu đề dẫn dắt */}
              <div className="w-full lg:w-4/5 mx-auto mt-6 text-[clamp(1.5rem,2.5vw,2rem)] leading-tight">
                {lang == "Viet"
                  ? "Tay nghề thật sự chuyển đổi khi bạn biết:"
                  : "Expertise truly transforms when you know:"}
                {/* Phần danh sách bullet points */}
                <ul className="list-disc list-inside mt-4 ml-5 space-y-2 text-[clamp(1.5rem,2.5vw,2rem)]">
                  <li>
                    {lang == "Viet"
                      ? "Tăng trưởng doanh số tại Modern Trade"
                      : "Driving sales growth within Modern Trade channels."}
                  </li>
                  <li>
                    {lang == "Viet"
                      ? "Biết cách làm việc với hệ thống lớn"
                      : "Navigating and collaborating effectively with large-scale systems."}
                  </li>
                  <li>
                    {lang == "Viet"
                      ? "Có kế hoạch AOP rõ ràng – không làm theo cảm tính"
                      : "Developing data-driven AOPs—moving beyond intuition-based execution."}
                  </li>
                </ul>
              </div>

              <div className={`mt-7 mb-5 w-full flex justify-center`}>
                <button
                  className={`${styles.goldenButton} text-black font-bold
                  rounded-full 
                  text-[clamp(1rem,5vw,1.55rem)]
                  text-balance
                  py-3 px-4 transition-all duration-300 ml-5 mx-auto!`}
                >
                  {lang == "Viet"
                    ? "THỰC THI CHIẾN LƯỢC ĐÚNG NGAY HÔM NAY!"
                    : "EXECUTE THE RIGHT STRATEGY TODAY!"}
                </button>
              </div>
            </div>
            <div
              className={`w-full lg:w-1/2! flex flex-col justify-center items-center text-center`}
            >
              <Image
                src={SolutionImage}
                alt="Market Conquering Weapon Text"
                className={`w-full h-auto lg:w-4/5 mx-auto mt-10 my-auto`}
              />
            </div>
          </div>
        </div>
        <div className={`flex flex-col gap-10 w-9/10 lg:w-19/20 mx-auto`}>
          <Image
            src={lang == "Viet" ? CoursePackText : CoursePackTextEN}
            alt="Market Conquering Weapon Text"
            className={`w-4/5 mx-auto mt-10`}
          />
          <div className={`grid! grid-cols-1 lg:grid-cols-3 gap-4`}>
            {/* Package 1 */}
            <div className={`${CoursePackStyles.container}`}>
              <div>
                <div className={`${CoursePackStyles.indexTitle}`}>
                  {lang == "Viet" ? "GÓI 1" : "PACKAGE 1"}
                </div>
                <div className={`${CoursePackStyles.title}`}>
                  TRAINING (ENTRY)
                </div>
              </div>
              <div className={`${CoursePackStyles.contentBox}`}>
                <div className={`${CoursePackStyles.key}`}>
                  {lang == "Viet" ? "Thời lượng: " : "Duration: "}
                  <span className={`${CoursePackStyles.content}`}>
                    {lang == "Viet"
                      ? "1 ngày (6 – 8 tiếng)"
                      : "1 Day (6 – 8 hours)"}
                  </span>
                </div>
                <div>
                  <span className={`${CoursePackStyles.key}`}>
                    {lang == "Viet" ? "Giá trị bao gồm: " : "Key Offerings:"}
                  </span>
                  <div className={`${CoursePackStyles.content}`}>
                    <ul className={`list-disc list-inside pl-5`}>
                      <li>
                        {lang == "Viet"
                          ? "Thực chiến Module 1,2,3"
                          : "Hands-on intensive: Modules 1, 2, & 3"}
                      </li>
                      <li>Overview AOP (Module 4)</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={`w-full flex items-center`}>
                <button
                  className={`${styles.goldenButton} text-white font-bold
                  rounded-full 
                  text-[clamp(0.75rem,5vw,1rem)] 
                  lg:text-[clamp(1.5rem,5vw,2.5rem)] 
                  2xl:text-[clamp(0.875rem,5vw,1.5rem)] 
                  3xl:text-[clamp(1.5rem,5vw,2.5rem)] 
                  text-balance
                  py-3 px-4 transition-all duration-300 ml-5 mx-auto!`}
                >
                  {lang == "Viet"
                    ? "CHI PHÍ TRAO ĐỔI THÊM"
                    : "CONTACT FOR PRICING DETAILS"}
                </button>
              </div>
            </div>
            {/* Package 2 */}
            <div className={`${CoursePackStyles.container}`}>
              <div>
                <div className={`${CoursePackStyles.indexTitle}`}>
                  {lang == "Viet" ? "GÓI 2" : "PACKAGE 2"}
                </div>
                <div className={`${CoursePackStyles.title}`}>
                  WORKSHOP (CORE)
                </div>
              </div>
              <div className={`${CoursePackStyles.contentBox}`}>
                <div className={`${CoursePackStyles.key}`}>
                  {lang == "Viet" ? "Thời lượng: " : "Duration: "}
                  <span className={`${CoursePackStyles.content}`}>
                    {lang == "Viet" ? "2 ngày" : "2 Days"}
                  </span>
                </div>
                <div>
                  <span className={`${CoursePackStyles.key}`}>
                    {lang == "Viet" ? "Giá trị bao gồm: " : "Key Offerings:"}
                  </span>
                  <div className={`${CoursePackStyles.content}`}>
                    <ul className={`list-disc list-inside pl-5`}>
                      <li>
                        {lang == "Viet"
                          ? "Thực chiến workshop xây dựng kế hoạch"
                          : "Strategic planning workshop"}
                      </li>
                      <li>
                        {lang == "Viet"
                          ? "Học viên thực hành mini AOP"
                          : 'Hands-on "Mini AOP" practice for participants'}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={`w-full flex items-center`}>
                <button
                  className={`${styles.goldenButton} text-white font-bold
                  rounded-full 
                  text-[clamp(0.75rem,5vw,1rem)] 
                  lg:text-[clamp(1.5rem,5vw,2.5rem)] 
                  2xl:text-[clamp(0.875rem,5vw,1.5rem)] 
                  3xl:text-[clamp(1.5rem,5vw,2.5rem)] 
                  text-balance
                  py-3 px-4 transition-all duration-300 ml-5 mx-auto!`}
                >
                  {lang == "Viet"
                    ? "CHI PHÍ TRAO ĐỔI THÊM"
                    : "CONTACT FOR PRICING DETAILS"}
                </button>
              </div>
            </div>
            {/* Package 3 */}
            <div className={`${CoursePackStyles.container}`}>
              <div>
                <div className={`${CoursePackStyles.indexTitle}`}>
                  {lang == "Viet" ? "GÓI 3" : "PACKAGE 3"}
                </div>
                <div className={`${CoursePackStyles.title}`}>
                  CONSULTING + COACHING (PREMIUM)
                </div>
              </div>
              <div className={`${CoursePackStyles.contentBox}`}>
                <div className={`${CoursePackStyles.key}`}>
                  {lang == "Viet" ? "Thời lượng: " : "Duration: "}
                  <span className={`${CoursePackStyles.content}`}>
                    {lang == "Viet" ? "4 - 8 tuần" : "4 - 8 Weeks"}
                  </span>
                </div>
                <div>
                  <span className={`${CoursePackStyles.key}`}>
                    {lang == "Viet" ? "Giá trị bao gồm: " : "Key Offerings:"}
                  </span>
                  <div className={`${CoursePackStyles.content}`}>
                    <ul className={`list-disc list-inside pl-5`}>
                      <li>
                        {lang == "Viet"
                          ? "Training & Workshops"
                          : "Comprehensive Training & Workshops"}
                      </li>
                      <li>
                        {lang == "Viet"
                          ? "Review AOP thực tế của công ty"
                          : "Real-world corporate AOP review."}
                      </li>
                      <li>
                        {lang == "Viet"
                          ? "Coaching 1-1 với team leader"
                          : "Personalized 1-on-1 coaching with Team Leaders."}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={`w-full flex items-center`}>
                <button
                  className={`${styles.goldenButton} text-white font-bold
                  rounded-full 
                  text-[clamp(0.75rem,5vw,1rem)] 
                  lg:text-[clamp(1.5rem,5vw,2.5rem)] 
                  2xl:text-[clamp(0.875rem,5vw,1.5rem)] 
                  3xl:text-[clamp(1.5rem,5vw,2.5rem)] 
                  text-balance
                  py-3 px-4 transition-all duration-300 ml-5 mx-auto!`}
                >
                  {lang == "Viet"
                    ? "CHI PHÍ TRAO ĐỔI THÊM"
                    : "CONTACT FOR PRICING DETAILS"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`w-full pt-10 flex flex-col`}>
        <Image
          src={lang === "Viet" ? ExploreCourseText : ExploreCourseTextEN}
          alt="Explore Course Text"
          className={`w-17/20 mx-auto`}
        />
        <Image
          src={EventLinkedInImage}
          alt="Explore Course Text"
          className={`w-17/20 mx-auto mt-10 `}
        />
        <div className={`grid! grid-cols-2 mx-5 gap-3`}>
          <div className="h-full flex flex-col items-center justify-center gap-4 lg:gap-8">
            {/* Phần nhãn EBOOK */}
            <div className="text-white font-bold text-[clamp(1rem,4vw,12rem)] leading-none tracking-wider">
              {lang === "Viet" ? "EBOOK MIỄN PHÍ" : "FREE EBOOK"}
            </div>

            {/* Phần Nút bấm Gradient */}
            <button
              className={`
                text-white font-bold uppercase
                bg-linear-to-r from-[#4C5409] via-[#4C5409] to-[#B0B266]
                /* Clamp cho font nút: Min 1rem (16px) -> Max 1.5rem (24px) */
                text-[clamp(1rem,3vw,5rem)]
                /* Padding scale theo màn hình */
                py-[clamp(0.5rem,2vw,1rem)] px-[clamp(1rem,5vw,4rem)]
                rounded-full shadow-lg hover:brightness-110 active:scale-95 transition-all
              `}
            >
              {lang === "Viet" ? "NHẬN NGAY" : "DOWNLOAD NOW"}
            </button>
          </div>
          <div>
            <Image
              src={CourseBookImage}
              alt="Explore Course Text"
              className={`w-full mx-auto mt-5`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewestCouresSection;

const FloatingHero = () => {
  const { lang } = useLanguage();
  // Cập nhật neonLine: Bỏ top-0 bottom-0 cố định, để nó tự thích ứng với height của box
  const neonLine =
    "before:content-[''] before:absolute before:top-2 before:bottom-2 before:w-[2px] " +
    "before:bg-gradient-to-b before:from-transparent before:via-[#84cc16] before:to-transparent " +
    "before:border-none before:outline-none";

  return (
    <div className="relative w-full flex items-center justify-center overflow-hidden px-4 ">
      <div className="relative w-full max-w-[1920px] lg:aspect-video flex flex-col items-center justify-center gap-10">
        {/* Ảnh chính */}
        <Image
          src={WeaponConquerMarket}
          alt="Central Graphic"
          className="w-full lg:w-7/10! h-auto object-contain relative z-10 opacity-90 order-first lg:order-none"
        />

        {/* CÁC KHỐI CHỮ */}

        {/* Khối 1: Mobile TRÁI - Desktop TRÁI TRÊN */}
        <div
          className={`
            relative lg:absolute 
            lg:top-[30%] lg:left-[3%] 
            z-20 w-full lg:max-w-[550px]
            /* Mobile: Trái */
            self-start text-left lg:pl-6 
            pl-4
            /* Desktop: Phải (như code cũ của bạn) */
            lg:pr-6 lg:pl-0
            text-balance
            ${neonLine} 
            /* Mobile: Line bên trái */
            before:left-0 
            /* Desktop: Line bên trái (giữ theo yêu cầu đảo border của bạn) */
            lg:before:left-0 
            !border-none
          `}
        >
          <h3 className="text-[clamp(1.5rem,2.2vw,3rem)] font-bold text-white mb-2 leading-tight">
            {lang == "Viet"
              ? "Bảng kiểm tra kỹ năng"
              : "Skills Assessment Checklist"}
          </h3>
          <p className="text-[clamp(1rem,1.2vw,1.4rem)] text-white/70">
            {lang == "Viet"
              ? "Khung chấm điểm chéo (Peer-to-peer assessment) đảm bảo chất lượng đồng đều"
              : "Peer-to-peer assessment frameworks to ensure consistent quality standards."}
          </p>
        </div>

        {/* Khối 2: Mobile PHẢI - Desktop PHẢI GIỮA */}
        <div
          className={`
            relative lg:absolute 
            lg:top-[18%] lg:right-[3%] 
            z-20 w-full lg:max-w-[500px]
            /* Mobile: Phải */
            self-end text-right pr-4 
            text-balance
            /* Desktop: Trái */
            lg:text-left lg:pl-6 lg:pr-0
            ${neonLine} 
            /* Mobile: Line bên phải */
            before:right-0 
            /* Desktop: Line bên phải */
            lg:before:right-0 
            !border-none
          `}
        >
          <h3 className="text-[clamp(1.5rem,2.2vw,3rem)] font-bold text-white mb-2 leading-tight">
            {lang == "Viet"
              ? "Mẫu AOP Chuẩn 12 tháng"
              : "Standard 12-Month Annual Operating Plan (AOP) Template"}
          </h3>
          <p className="text-[clamp(1rem,1.2vw,1.4rem)] text-white/70">
            {lang == "Viet"
              ? "Khung Excel/ Word định sẵn công thức tính ROI, Trade Spend và Target Allocation"
              : "Pre-formatted Excel/Word templates with automated formulas for ROI, Trade Spend, and Target Allocation."}
          </p>
        </div>

        {/* Khối 3: Mobile TRÁI - Desktop TRÁI DƯỚI */}
        <div
          className={`
            relative lg:absolute 
            lg:bottom-[5%] lg:left-[15%] 
            z-20 w-full lg:max-w-[500px]
            /* Mobile: Trái */
            self-start text-left pl-4 
            /* Desktop: Trái */
            lg:text-left lg:pl-6 
            ${neonLine} 
            /* Mobile: Line bên trái */
            before:left-0 
            /* Desktop: Line bên trái */
            lg:before:left-0 
            !border-none
          `}
        >
          <h3 className="text-[clamp(1.5rem,2.2vw,3rem)] font-bold text-white mb-2 leading-tight">
            {lang == "Viet" ? "Cẩm Nang Bỏ Túi" : "The Essential Field Guide"}
          </h3>
          <p className="text-[clamp(1rem,1.2vw,1.4rem)] text-white/70">
            {lang == "Viet"
              ? "Bộ script xử lý tình huống nhanh 03 Câu Hỏi Vàng và Key Phrases mạnh mẽ"
              : ' A collection of rapid situational response scripts, including "03 Golden Questions" and high-impact key phrases.'}
          </p>
        </div>
      </div>
    </div>
  );
};
