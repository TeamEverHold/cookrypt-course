from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from allow_origins import origins
from get_tags import get_tags as get_tags_from_ai


class HistoryItem(BaseModel):
    title: str
    url: str
    last_visit_time: str
    visit_count: int


class UserData(BaseModel):
    history: list[HistoryItem]


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def index():
    return {"Hello": "World"}


@app.post("/tags")
async def get_tags(data: UserData):
    if len(data.history) == 0:
        raise HTTPException(400, "history is empty")
    tags = get_tags_from_ai(data)
    return {
        "tags": tags,
    }
