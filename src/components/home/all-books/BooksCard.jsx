import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router";
import { Star } from "lucide-react";

const BooksCard = ({
  id,
  bookName,
  author,
  image,
  rating,
  category,
  tags = [],
}) => {
  return (
    <Card className={"border-stroke font-work justify-between"}>
      <CardHeader className='lg:px-6 xs:px-3 px-2' >
        <CardTitle className="bg-background flex items-center justify-center py-6 rounded-2xl">
          <img src={image} alt="" className="max-h-[170px] sm:max-h-[240px]" />
        </CardTitle>
        <CardDescription className="flex items-center gap-2 flex-wrap mt-2">
          {tags.length > 0 &&
            tags.map((tag, i) => <Badge key={i}>{tag}</Badge>)}
        </CardDescription>
      </CardHeader>
      <CardContent className='lg:px-6 xs:px-3 px-2'>
        <Link
          to={`/book/${id}`}
          className="font-playfair text-dark text-lg xs:text-xl font-bold"
        >
          {bookName}
        </Link>
        <p className="text-sm font-medium text-dark-light mt-3">
          By : {author}
        </p>
        <hr className="mt-5 border-dashed border-stroke" />
      </CardContent>
      <CardFooter className="flex items-center justify-between font-medium text-sm text-dark-light lg:px-6 xs:px-3 px-2">
        <p>{category}</p>
        <p className="flex items-center gap-2"><Star className="size-[16px]" /> {rating}</p>
      </CardFooter>
    </Card>
  );
};

export default BooksCard;
