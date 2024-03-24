import JobApplyFormWrapper from "@/components/jobs/JobApplyFormWrapper";
import SingleJobWrapper from "@/components/jobs/SingleJobWrapper";

interface Props {
  params: { locale: string; id: string };
}

export const metadata = {
  title: "Job",
  description: "Applying form to join our 777 Guards team.",
};

async function getSingleJob(id: string) {
  try {
    let res = await fetch(`${process.env.NEXT_PUBLIC_REST_API_ENDPOINT}/api/jobs/${id}`);
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    let data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default async function BlogDetails({ params: { locale, id } }: Props) {
  const jobDetails = await getSingleJob(id);

  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="md:flex justify-center items-center relative w-full h-full overflow-hidden">
        <SingleJobWrapper jobData={jobDetails} lang={locale} />
        <JobApplyFormWrapper lang={locale} jobId={id} />
      </div>
    </div>
  );
}
