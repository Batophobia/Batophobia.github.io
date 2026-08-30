import asyncio
import websockets

clients = set()

async def handler(websocket):
  clients.add(websocket)

  try:
    async for message in websocket:
      for client in clients.copy():
        if client != websocket:
          await client.send(message)

  except websockets.ConnectionClosed:
    pass

  finally:
    clients.remove(websocket)


async def main():
  async with websockets.serve(handler, "0.0.0.0", 8765):
    print("Server running on port 8765")
    await asyncio.Future()

asyncio.run(main())