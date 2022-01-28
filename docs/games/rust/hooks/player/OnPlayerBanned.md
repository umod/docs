---
hide_table_of_contents: true
---

# OnPlayerBanned

## Usage

* Called when the player is banned (Facepunch, EAC, server ban, etc.)
* No return behavior

## Examples

```csharp title=""
void OnPlayerBanned(string playerName, ulong playerId, string playerIp, string reason, long expiry)
{
    Puts("OnPlayerBanned works!");
}
```

```csharp title=""
void OnPlayerBanned(Network.Connection connection, string reason)
{
    Puts("OnPlayerBanned works!");
}
```
