---
hide_table_of_contents: true
---

# OnUserDisconnected

## Usage

* Called after a player has disconnected from the server
* No return behavior

## Examples

```csharp title=""
void OnUserDisconnected(IPlayer player)
{
    Puts($"{player.Name} ({player.Id}) disconnected");
}
```
