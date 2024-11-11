import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import illustrationArt from '@/assets/images/illustration-article.svg';
import imgAvatar from '@/assets/images/image-avatar.webp';

function BlogPreviewCard() {
  return (
    <Card className='max-w-sm w-full shadow-custom-right-bottom rounded-[1.25rem] font-figtree border border-primary-foreground'>
      <CardHeader>
        <img
          src={illustrationArt}
          alt='illustration article'
          className='rounded-[0.625rem] object-cover'
        />
      </CardHeader>
      <CardContent>
        <div className='flex flex-col gap-y-3 text-primary-foreground'>
          <Button className='h-[29px] bg-background font-extrabold w-20 hover:bg-background px-3 py-1 rounded-[0.25rem]'>
            Learning
          </Button>
          <span className='text-sm font-medium'>Published 21 Dec 2023</span>
          <h1 className='text-2xl leading-9 font-extrabold hover:text-background hover:cursor-pointer duration-300'>
            HTML & CSS foundations
          </h1>
          <p className='text-base text-primary'>
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
        </div>
      </CardContent>
      <CardFooter className='gap-x-3'>
        <img
          src={imgAvatar}
          alt='avatar image'
          className='rounded-full h-8 w-8 object-cover'
        />
        <span className='text-sm font-extrabold text-primary-foreground'>
          Greg Hooper
        </span>
      </CardFooter>
    </Card>
  );
}

export default BlogPreviewCard;
