import { useParams } from "react-router";

export default function CourseDetail() {
  const params = useParams();
  console.log(params);

  return (
    <div className="text-4xl font-semibold text-gray-800 text-center mt-10 capitalize">
      {params.courseId} Course Detail Page
    </div>
  );
}
