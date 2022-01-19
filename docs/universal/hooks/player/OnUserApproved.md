---
hide_table_of_contents: true
---

# OnUserApproved

## Usage

* Called after a player is approved to connect to the server
* No return handling

## Examples

```csharp
void OnUserApproved(string playerName, string playerId, string playerIp)
{
    Puts($"{playerName} ({playerId}) at {playerIp} has been approved to connect");
}
```
