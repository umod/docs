---
hide_table_of_contents: true
---

# OnUserUnbanned

## Usage

* Called after a player has been unbanned from the server
* No return handling

## Examples

```csharp
void OnUserUnbanned(string playerName, string playerId, string playerIp)
{
    Puts($"Player {playerName} ({playerId}) at {playerIp} has been unbanned");
}
```
