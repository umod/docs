---
hide_table_of_contents: true
---

# OnUserChat

## Usage

* Called after a player has been approved and has connected to the server
* No return behavior

## Examples

```csharp title=""
void OnUserConnected(IPlayer player)
{
    Puts($"{player.Name} ({player.Id}) connected from {player.Address}");

    if (player.IsAdmin)
    {
        Puts($"{player.Name} ({player.Id}) is admin");
    }

    Puts($"{player.Name} is {(player.IsBanned ? "banned" : "not banned")}");

    server.Broadcast($"Welcome {player.Name} to {server.Name}!");
}
```
