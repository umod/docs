---
hide_table_of_contents: true
---

# OnSignLocked

## Usage

* Called after the player has locked a sign or photo frame
* No return behavior

## Examples

```csharp title=""
void OnSignLocked(Signage sign, BasePlayer player)
{
    Puts("OnSignLocked works!");
}
```

```csharp title=""
void OnSignLocked(PhotoFrame photoFrame, BasePlayer player)
{
    Puts("OnSignLocked works!");
}
```
